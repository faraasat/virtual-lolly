import React from "react"
import "./lolly-form.styles.css"
import TextInputComponent from "../text-input/text-input.component"
import MsgBoxComponent from "../msg-box/msg-box.component"

const LollyFormComponent = ({ formik }) => {
  return (
    <form
      className="lolly-component__lolly-form"
      onSubmit={formik.handleSubmit}
    >
      <div className="lolly-component__lolly-form__content">
        <TextInputComponent
          handleChange={formik.handleChange}
          values={formik.values.recipient}
          touched={formik.touched.recipient}
          error={formik.errors.recipient}
          label={"To"}
          id={"recipient"}
          name={"recipient"}
          placeholder={"A lolly For..."}
          htmlFor={"recipient"}
        />
        <MsgBoxComponent
          handleChange={formik.handleChange}
          values={formik.values.msg}
          touched={formik.touched.msg}
          error={formik.errors.msg}
          label={"Say Something Nice."}
          id={"msg"}
          name={"msg"}
          htmlFor={"msg"}
          cols={30}
          rows={10}
        />
        <TextInputComponent
          handleChange={formik.handleChange}
          values={formik.values.from}
          touched={formik.touched.from}
          error={formik.errors.from}
          label={"From"}
          id={"from"}
          name={"from"}
          placeholder={"from your friend.."}
          htmlFor={"from"}
        />
      </div>
      <button
        className="lolly-component__lolly-form-btn"
        type="submit"
        disabled={formik.isSubmitting}
      >
        Freeze this lolly and get a link
      </button>
    </form>
  )
}

export default LollyFormComponent
