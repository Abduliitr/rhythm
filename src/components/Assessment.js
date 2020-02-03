import React from "react";
import { validate } from "./validate";
class Assessment extends React.Component {
  state = {
    form: {
      A1: "",
      A2: "",
      A3: "",
      A4: "",
      A5: "",
      A6: "",
      A7: "",
      A8: "",
      A9: "",
      A10: "",
      age: "",
      A12: "",
      A13: "",
      A14: ""
    },
    error: {}
  };
  onChange = e => {
    const form = { ...this.state.form };
    form[e.target.name] = e.target.value;
    this.setState({ form });
  };

  processForm = e => {
    e.preventDefault();
    console.log("dgfnge");
    const error = {};
    // const { error, validated } = validate(this.state.form);
    console.log("aJHHFA");
    if (true) {
      let sum = 0;
      const form = this.state.form;
      const params = Object.keys(form).map((o, index) => {
        if (index < 10) sum += Number(this.state.form[o]);
        console.log(o);
        return Number(this.state.form[o]);
      });
      params.splice(11, 0, sum);
      console.log(params);
      window.alert(
        `Percentge Autism in Child: ${Math.floor(Math.random() * 100)}`
      );

      // this.props.assess();
    } else {
      this.setState({ error });
      console.log("asfg");
    }
  };
  render() {
    // console.log(this.state.form);
    // console.log("error: " + this.state.error);
    return (
      <div
        class="ui container"
        style={{ minHeight: "100vh", backgroundColor: "#F8F8F8" }}
      >
        <div className="ui container">
          <h4 style={{ textAlign: "center", padding: "30px" }}>
            {" "}
            Please answer few questions, so that we can help you better! (To be
            answered by parents only)
          </h4>
        </div>

        <div class="ui two column doubling stackable grid container">
          <form class="ui form" onSubmit={this.processForm}>
            <div class="column">
              <div class="grouped fields">
                <label for="A1">
                  1. Does your child look at you when you call his/her name?
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A1"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A1"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A2">
                  2. Is it for you to get eye contact with your child?
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A2"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A2"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A3">
                  3. Does your child point to indicate that she/he wants
                  something? (e.g. a toy that is out of reach)
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A3"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A3"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A4">
                  4. Does your child point to share interest with you? (e.g.
                  pointng at an interesing sight)
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A4"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A4"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A5">
                  5. Does your child pretend? (e.g. care for dolls, talk on a
                  toy phone){" "}
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A5"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A5"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A6">
                  6. Does your child pretend? (e.g. care for dolls, talk on a
                  toy phone){" "}
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A6"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A6"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A7">
                  7. If you or someone else in the family is visibly upset, does
                  your child show signs of wanting to comfort them? (e.g.
                  stroking hair, hugging them)
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A7"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A7"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>
            </div>
            <div class="column">
              <div class="grouped fields">
                <label for="A8">
                  8. Did your child started to speak few words (like “mama”)
                  within 6 months?{" "}
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A8"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A8"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A9">
                  9. Does your child use simple gestures? (e.g. wave goodbye){" "}
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A9"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A9"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                0{" "}
                <label for="A10">
                  10. Does your child stare at nothing with no apparent purpose?{" "}
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A10"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A10"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A11">
                  11. What is your child's age in months?{" "}
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="number"
                      name="age"
                      placeholder="(For e.g., 18)"
                      onChange={this.onChange}
                    />
                  </div>
                </div>
              </div>
              {/* skipped -> sum of 1-10 wala question that needs to be the 12th answer in the model */}
              <div class="grouped fields">
                <label for="A12">12. What is your child's gender? </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A12"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Male</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A12"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Female</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A13">13. Does your child had Jaundice? </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A13"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A13"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <div class="grouped fields">
                <label for="A14">
                  14. Are there any family member suffering from ASD?{" "}
                </label>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A14"
                      onChange={this.onChange}
                      value="1"
                    />
                    <label>Yes</label>
                  </div>
                </div>
                <div class="field">
                  <div class="ui radio checkbox">
                    <input
                      type="radio"
                      name="A14"
                      onChange={this.onChange}
                      value="0"
                    />
                    <label>No</label>
                  </div>
                </div>
              </div>

              <button class="ui button" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>

        <div class="column"></div>
      </div>
    );
  }
}

export default Assessment;
