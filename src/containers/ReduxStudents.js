import React, {Component} from 'react'

import { connect } from 'react-redux'

class ReduxStudents extends Component {
	render(){
		console.log(this.props.students)
		var studentArray = [];
		this.props.students.map((student, index)=>{
			studentArray.push(<li key={index}>{student}</li>)
		})
		return (
			<div>
				<h1> This is ReduxStudents</h1>
				{studentArray}
			</div>
		)
	}

}

function mapStateToProps(state){
	return {
		students: state.students
	}
}



export default connect(mapStateToProps)(ReduxStudents);