import React,{Component} from 'react';
import {ListItem,Right,Left,Thumbnail,Body,Text,Button, View} from 'native-base';
import moment from 'moment';
export default class Time extends Component{
    constructor(props){
        super(props);
        this.date=props.time;
        
    }
    render(){
        const time=moment(this.date || moment.now()).fromNow();
        return( 
        <Text note style={{marginHorizontal:13}}>{time}</Text>
        );
    } 
}

