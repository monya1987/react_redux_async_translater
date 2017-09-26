import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchLanguages, translateText, changeLangTo, changeLangFrom} from '../actions'


class Translater extends Component {
    constructor(props) {
        super(props);

        this.handleLangChangeFrom = this.handleLangChangeFrom.bind(this);
        this.handleLangChangeTo = this.handleLangChangeTo.bind(this);
        this.handleTextChange = this.handleTextChange.bind(this);

    }
    componentDidMount() {
        const apiKey = 'trnsl.1.1.20161021T093905Z.f5d154a8be033577.f4917552f0898a52ee1d8316dc79d7110dd4336a';
        this.props.fetchLanguages(`https://translate.yandex.net/api/v1.5/tr.json/getLangs?ui=en&key=${apiKey}`)
    }

    handleLangChangeFrom(event) {
        this.props.changeLangFrom(event.target.value)
    }

    handleLangChangeTo(event) {
        this.props.changeLangTo(event.target.value)
    }

    handleTextChange(event) {
        const url = 'https://translate.yandex.net/api/v1.5/tr.json/translate'
        const apiKey = 'trnsl.1.1.20161021T093905Z.f5d154a8be033577.f4917552f0898a52ee1d8316dc79d7110dd4336a';
        const request = `${url}?key=${apiKey}&text=${event.target.value}&lang=${this.props.lang.langFrom}-${this.props.lang.langTo}`;
        this.props.translateText(request)
    }

    render() {
        const {lang} = this.props;
        return (
            <div className="container">
                <br/><br/><br/><br/>
                <div className="row">
                    <div className="col-sm-6">
                    <select className="form-control" name="langFrom" value={lang.langFrom} onChange={this.handleLangChangeFrom}>
                        {Object.keys(lang.items).map(function (key, index) {
                            return (
                                <option key={index} value={Object.keys(lang.items)[index]}>{lang.items[key]}</option>
                            );}, this)}
                    </select>
                    </div>
                    <div className="col-sm-6">
                    <select className="form-control" name="langTo" value={lang.langTo} onChange={this.handleLangChangeTo}>
                        {Object.keys(lang.items).map(function (key, index) {
                            return (
                                <option key={index} value={Object.keys(lang.items)[index]}>{lang.items[key]}</option>
                            );}, this)}
                    </select>
                    </div>
                </div>
                <br/><hr/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="form-group">
                            <button className="btn btn-primary" value="ru" onClick={this.handleLangChangeFrom}>Russian</button>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="textFrom" onChange={this.handleTextChange}/>
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="form-group">
                            <button className="btn btn-primary" value="en" onClick={this.handleLangChangeTo}>English</button>
                        </div>
                        <div className="form-group">
                            <textarea className="form-control" name="textTo" disabled value={lang.textTo}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        lang: state.languagesReduser,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchLanguages: bindActionCreators(fetchLanguages, dispatch),
        translateText: bindActionCreators(translateText, dispatch),
        changeLangTo: bindActionCreators(changeLangTo, dispatch),
        changeLangFrom: bindActionCreators(changeLangFrom, dispatch),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Translater)

