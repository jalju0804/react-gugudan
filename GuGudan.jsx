const React = require('react');
const ReactDom = require('react-dom');
const { Component } = React;

const courrent = {
    border: "1px solid gray",
    transitiondelay : "1s",
    dispaly : "inlineblock",
    boxsizing : "border-box",
    width : "130px",  
    margin : "5px 0px 0px 1px",
    background : "#3DFF92",
}


class GuGudan extends Component{
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
        count : 0,
    };


onSubmit = (e) => {
                e.preventDefault();
                if(parseInt(this.state.value) === this.state.first * this.state.second){
                  
                    this.setState((prevState) => {
                        return{
                            result :'정답 ' + prevState.value,
                            first : Math.ceil(Math.random() * 9),
                            second : Math.ceil(Math.random() * 9),
                            value: '',
                            count : prevState.count + 1,
                        };
                    });
                    this.input.focus();
                } else {
                    this.setState({
                        result : '땡',
                        value: '',
                        count : 0,
                        });
                    this.input.focus();
                }
            };

onChange = (e) => this.setState({value : e.target.value,out:''});
input; //dom에 접근하기 위해 ref 용도로 암거나 하나 선택
onRefInput = (c)=>{this.input = c;}
render(){
    console.log('랜더링');
    return(
        <>
            <div>{this.state.first} 곱하기 {this.state.second}는?</div>
            <form onSubmit = {this.onSubmit}>
                <input ref={this.onRefInput} type= "number" value={this.state.value} onChange = {this.onChange}/>
                    <button>입력!</button>
            </form>
            <div> {this.state.out} {this.state.result}</div>
            <div style={courrent}>Correct Count : {this.state.count}</div>
            <img src = "./수학선생님.jfif"></img>
        </>
    );
}
}

module.exports = GuGudan;