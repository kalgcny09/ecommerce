import React, {Component} from 'react'

class Students extends Component {
constructor(props) {
    super(props);
    this.state = {
      students: []
    }
  }

  componentDidMount() {
    var localStudents = [
      "Hayes",
      "Daniel",
      "Nick",
      "Marissa"
    ];
    this.setState({
      students: localStudents
    })
  }

  render() {
    var studentArray = []
    this.state.students.map((student, index)=>{
      studentArray.push(<li key={index}>{student}</li>)
    })
		return (
			<h1> {studentArray}</h1>

		)

	}
	
}

export default Students