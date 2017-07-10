import React, {Component} from 'react'

import {connect} from 'react-redux'

class ReduxStudents extends Component{
	console.log(this.props.students)
	render(){
		var studentsArray = [];
		this.props.students.map((student,index)=>{
			studentsArray.push(<li key={index}>{student}</li>)
		})
		return(
			<h1>This is ReduxStudents</h1>
		)
	}

}

function mapStateToProps(state){
	return{
		students: state.students
	}
}

export default connect(mapStateToProps)(ReduxStudents);