import { Button, Col, Input, Row } from "antd";
import React from "react";

// var students = [
//   { id: 1, name: "Amit" },
//   { id: 2, name: "Samadhan" },
//   { id: 3, name: "Prajakta" },
//   { id: 4, name: "Vijaya" },
// ];

export class SubjectListComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      subjects: ["Javascript", "HTML", "React", "Angular"],
      subjectName: "",
      //   students: [
      //     { id: 1, name: "Amit", per: 70 },
      //     { id: 2, name: "Samadhan", per: 80 },
      //     // { id: 3, name: "Prajakta", per: 60 },
      //     { id: 4, name: "Vijaya", per: 90 },
      //     { id: 5, name: "Pradnya", per: 70 },
      //   ],
    };
  }

  //<div>Amit</div>
  //<div>Samadhan</div>

  //   <div>JAvascript</div>
  //   <div>Html</div>
  //   <div>React</div>

  handleOnChange(e) {
    this.setState({ subjectName: e.target.value });
  }

  handleAddSubject() {
    const subs = this.state.subjects;
    subs.push(this.state.subjectName);
    this.setState({ subjects: subs, subjectName: "" });
  }
  render() {
    return (
      <Row>
        <Col span={24}>{this.state.subjects}</Col>
        {/* <Row>
            <Col span={24}>{this.state.subjects[0]}</Col>
            <Col span={24}>{this.state.subjects[1]}</Col>
            <Col span={24}>{this.state.subjects[2]}</Col>
            <Col span={24}>{this.state.subjects[3]}</Col>
            </Row> */}
        <Row>
          <Col span={24}> Using Map function</Col>
          {this.state.subjects.map(function (element, index) {
            return (
              <Col span={24} key={index}>
                {element}
              </Col>
            );
          })}

          <Col span={24}>
            <Input
              value={this.state.subjectName}
              onChange={this.handleOnChange.bind(this)}
            />
            <Button onClick={this.handleAddSubject.bind(this)}>
              Add Subject
            </Button>
          </Col>
        </Row>
        <Row>
          {/* <Col span={24}>{this.state.students}</Col> */}
          {/* <Col span={24}>
                {this.state.students.map((student) => {
                return <div key={student.id}>{student.name}</div>;
                })}
            </Col> */}
        </Row>
      </Row>
    );
  }
}

/**
 * assignement
 * list of cities & user can add new cities
 * list of states & user can add new states
 *
 */

// virtual :

// 1. convert your code into tree structure
// 2. it is stored in separate object (Virtual DOM)
// 3. Virtual DOM and real DOM both are in sync
// 4. if any data is changed then firstly it change Virtual DOM
// 5. comparison Virtual DOM and Real DOM
// 6. only difference is render on Screen(Real Ui/ Real DOM)

// Virtul Dom
// Row ->
// {

//     Col :{}
//     Row -> {
//             Col :
//             Col :{ id, element}
//             Col:{ id, element}
//             Col:{ id, element}
//             Col:{ id, element}
//     }
//     Row -> {
//             Col ->
//                 div: { id, element}
//                 // div:{ id, element}
//                 // div:{ id, element}
//                 div:{ id, element}
//     }
// }

// Real Dom
// Row ->
// {

//     Col :{}
//     Row -> {
//             Col :
//             Col :{ id, element}
//             Col:{ id, element}
//             Col:{ id, element}
//             Col:{ id, element}
//     }
//     Row -> {
//             Col ->
//                 div: { id, element}
//                 div:{ id, element}
//     }
// }
