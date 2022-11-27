import React, { useReducer } from "react";
import { initialState, reducer } from "../state/FromReducer";

export default function SingUpFrom() {
 
  const [state, dispatch] = useReducer(reducer, initialState);
  const submit = (e) => {
    e.preventDefault();
    console.log(state);
  };
  return (
    <div>
      <h1>SingUp From</h1>
      <form onSubmit={submit}>
        <label htmlFor="firstName">
          FirstName
          <input
            type="text"
            name="firstName"
            id="firstName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </label>
        <br />
        <label htmlFor="lastName">
          LastName
          <input
            type="text"
            name="lastName"
            id="lastName"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </label>
        <br />
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            id="email"
            onBlur={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
        </label>
        <br />
        <label>Gender</label>
        <label htmlFor="male">
          <input
            type="radio"
            name="gender"
            id="male"
            value="male"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          Male
        </label>
        <label htmlFor="female">
          <input
            type="radio"
            name="gender"
            id="female"
            value="female"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          Female
        </label>
        <label htmlFor="other">
          <input
            type="radio"
            name="gender"
            value="other"
            id="other"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: e.target.value },
              })
            }
          />
          Other
        </label>
        <br />
        <label>Education</label>
        <select
          onChange={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
          name="education"
        >
          <option value="ssc">SSC</option>
          <option value="hsc">HSC</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
        </select>
        <br />
        <label htmlFor="number">Number of PCs</label>
        <button
          type="button"
          onClick={(e) =>
            dispatch({
              type: "DECREMENT",
              payload: { number: 1 },
            })
          }
        >
          -
        </button>
        <input
          type="number"
          name="number"
          id="number"
          readOnly
          value={state.number}
        />
        <button
          type="button"
          onClick={() =>
            dispatch({
              type: "INCREMENT",
              payload: { number: 1 },
            })
          }
        >
          +
        </button>
        <br />
        <label htmlFor="feedback">Feedback</label>
        <br />
        <textarea
          onBlur={(e) =>
            dispatch({
              type: "INPUT",
              payload: { name: e.target.name, value: e.target.value },
            })
          }
          name="feedback"
          id="feedback"
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <label htmlFor="term">
          <input
            type="checkbox"
            name="term"
            id="term"
            onClick={(e) =>
              dispatch({
                type: "INPUT",
                payload: { name: e.target.name, value: !state.term },
              })
            }
          />{" "}
          I agree to terms and conditions
        </label>
        <br />
        <button disabled={state.term} type="submit">Submit</button>
      </form>
    </div>
  );
}
