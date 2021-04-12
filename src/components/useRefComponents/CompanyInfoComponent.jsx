import { Button, Col, Row } from "antd";
import { useRef, useState } from "react";

/*
    counter = 5
    i = 6
    */
export const CompanyInfoComponent = () => {
  const nameRef = useRef(null);
  const ownerRef = useRef(null);
  const divRef = useRef(null);
  const [counter, setCounter] = useState(0);

  const handleSubmit = () => {
    console.log("data >>", ownerRef.current.value, nameRef.current.value);
  };

  const handleFocus = () => {
    for (var i = 1; i <= 5; i++) {
      // setCounter(counter + 1);
      setCounter((c) => {
        return c + 1;
      });
    }
    // divRef.current.innerHTML = "Focus has been changed";
    // ownerRef.current.focus();
  };

  return (
    <Row>
      <Col span={24}>Company Info</Col>
      <Col span={24}>
        Name : <input ref={nameRef}></input>
      </Col>
      <Col span={24}>
        Owner : <input ref={ownerRef}></input>
      </Col>
      <Col span={24}>
        <div ref={divRef}>this is Content</div>
      </Col>
      <Col span={24}>
        <Button onClick={handleSubmit}>Submit</Button>
      </Col>

      <Col span={24}>
        Counter: {counter}
        <Button onClick={handleFocus}>Focus to Owner</Button>
      </Col>
    </Row>
  );
};

/*
var name = document.getElementById("comapnyName");  //alternate -> refName.current
name.value
name.innerHTML
name.id
var owner = document.getElementById("comapnyOwner").value
*/

/*
import { Button, Col, Input, Row } from "antd";
import { useState } from "react";

export const CompanyInfoComponent = () => {
  const [name, setName] = useState();
  const [owner, setOwner] = useState();

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleOwnerChange = (event) => {
    setOwner(event.target.value);
  };

  const handleSubmit = () => {
    console.log("name >>", name);
    console.log("owner >>", owner);
  };

  return (
    <Row>
      <Col span={24}>Company Info</Col>
      <Col span={24}>
        Name : <Input onChange={handleNameChange} value={name}></Input>
      </Col>
      <Col span={24}>
        Owner : <Input onChange={handleOwnerChange} value={owner}></Input>
      </Col>
      <Col span={24}>
        <Button onClick={handleSubmit}>Submit</Button>
      </Col>

      <Col span={24}>
        <Button>Focus to Owner</Button>
      </Col>
    </Row>
  );
};

*/
