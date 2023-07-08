import React from "react";
import "./Calculator.css";
import { useDispatch, useSelector } from "react-redux";
import {
  AllClear,
  Delete,
  Eval,
  Numbers,
  Operations,
} from "./Redux/Action-creators/ActionCreators";

function Calculator() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state);
  return (
    <div>
      <section id="buttons">
        <div id="text" className="align">
          <input
            type="text"
            id="text1"
            className="input"
            value={store.calculatorData.value}
          />
        </div>

        <div className="align">
          <button
            id="btnOB"
            className="but"
            onClick={() => {
              dispatch(Numbers("("));
            }}
          >
            (
          </button>
        </div>
        <div className="align">
          <button
            id="btnCB"
            className="but"
            onClick={() => {
              dispatch(Numbers(")"));
            }}
          >
            )
          </button>
        </div>
        <div className="align">
          <button
            id="del"
            className="but"
            onClick={() => {
              dispatch(Delete());
            }}
          >
            del
          </button>
        </div>
        <div className="align">
          <button
            id="AC"
            className="but"
            onClick={() => {
              dispatch(AllClear(""));
            }}
          >
            AC
          </button>
        </div>

        <div className="align">
          <button
            id="btn7"
            className="but"
            onClick={() => {
              dispatch(Numbers(7));
            }}
          >
            7
          </button>
        </div>
        <div className="align">
          <button
            id="btn8"
            className="but"
            onClick={() => {
              dispatch(Numbers(8));
            }}
          >
            8
          </button>
        </div>
        <div className="align">
          <button
            id="btn9"
            className="but"
            onClick={() => {
              dispatch(Numbers(9));
            }}
          >
            9
          </button>
        </div>
        <div className="align">
          <button
            id="btnDiv"
            className="but"
            onClick={() => {
              dispatch(Operations("/"));
            }}
          >
            /
          </button>
        </div>

        <div className="align">
          <button
            id="btn4"
            className="but"
            onClick={() => {
              dispatch(Numbers(4));
            }}
          >
            4
          </button>
        </div>
        <div className="align">
          <button
            id="btn5"
            className="but"
            onClick={() => {
              dispatch(Numbers(5));
            }}
          >
            5
          </button>
        </div>
        <div className="align">
          <button
            id="btn6"
            className="but"
            onClick={() => {
              dispatch(Numbers(6));
            }}
          >
            6
          </button>
        </div>
        <div className="align">
          <button
            id="btnMul"
            className="but"
            onClick={() => {
              dispatch(Operations("*"));
            }}
          >
            X
          </button>
        </div>

        <div className="align">
          <button
            id="btn1"
            className="but"
            onClick={() => {
              dispatch(Numbers(1));
            }}
          >
            1
          </button>
        </div>
        <div className="align">
          <button
            id="btn2"
            className="but"
            onClick={() => {
              dispatch(Numbers(2));
            }}
          >
            2
          </button>
        </div>
        <div className="align">
          <button
            id="btn3"
            className="but"
            onClick={() => {
              dispatch(Numbers(3));
            }}
          >
            3
          </button>
        </div>
        <div className="align">
          <button
            id="btnSub"
            className="but"
            onClick={() => {
              dispatch(Operations("-"));
            }}
          >
            -
          </button>
        </div>

        <div className="align">
          <button
            id="btn00"
            className="but"
            onClick={() => {
              dispatch(Numbers("00"));
            }}
          >
            00
          </button>
        </div>
        <div className="align">
          <button
            id="btn0"
            className="but"
            onClick={() => {
              dispatch(Numbers(0));
            }}
          >
            0
          </button>
        </div>
        <div className="align">
          <button
            id="btnPoint"
            className="but"
            onClick={() => {
              dispatch(Operations("."));
            }}
          >
            <sup>.</sup>
          </button>
        </div>
        <div className="align">
          <button
            id="btnAdd"
            className="but"
            onClick={() => {
              dispatch(Operations("+"));
            }}
          >
            +
          </button>
        </div>

        <div className="align">
          <button
            id="btnMod"
            className="but"
            onClick={() => {
              dispatch(Operations("%"));
            }}
          >
            %
          </button>
        </div>
        <div id="equals" className="align">
          <button
            id="btnEqualTo"
            className="but"
            onClick={() => {
              dispatch(Eval());
            }}
          >
            =
          </button>
        </div>
      </section>
    </div>
  );
}

export default Calculator;
