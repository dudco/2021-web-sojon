import React from "react";

interface ReservationProps {}
interface ReservationState {
  name: string;
  phone: string;
  gender: '남' | '여' | '선택안함';
  age: number;
}

class Reservation extends React.Component<ReservationProps, ReservationState> {
  constructor(props: ReservationProps) {
    super(props);

    this.state = {
      name: "",
      phone: "",
      gender: "선택안함",
      age: 0,
    }
  }

  handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      name: e.target.value,
    })
  }

  handlePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      phone: e.target.value,
    })
  }

  handleAge = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      age: +e.target.value,
    })
  }

  handleGender = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      gender: this.stringToGender(e.target.value),
    })
  }

  stringToGender = (data: string): '선택안함' | '남' | '여'  => {
    if(data === '선택안함') {
      return '선택안함';
    } else if(data === '남') {
      return '남'
    } else {
      return '여'
    }
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
        <div>
          <label>이름: <input type="text" value={this.state.name} onChange={this.handleName}/></label> <br/>
          <label>휴대전화: <input type="text" name="phone" value={this.state.phone} onChange={this.handlePhone}/></label> <br/>
          <label>
            성별: 
            <select name="gender" value={this.state.gender} onChange={this.handleGender}>
              <option value="선택안함">선택안함</option>
              <option value="남">남</option>
              <option value="여">여</option>
            </select>
          </label> <br/>
          <label>나이: <input type="text" name="age" value={this.state.age} onChange={this.handleAge}/></label> <br/>
          <button onClick={this.handleSubmit}>제출</button>
        </div>
    )
  }
}

export default Reservation;