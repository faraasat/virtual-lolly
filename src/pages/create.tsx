import React, { useState } from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./create.styles.css"
import Lolly from "../images/lolly"
import { useFormik } from "formik"
import TextInputComponent from "../components/text-input/text-input.component"

const CreatePage = () => {
  const [topColor, setTopColor] = useState<string>("#ed265b")
  const [midColor, setMidColor] = useState<string>("#f77249")
  const [bottomColor, setBottomColor] = useState<string>("#deaa43")

  const formik = useFormik({
    initialValues: { from: "", msg: "", recipient: "" },
    validate: (values: any) => {
      const errors = { from: "", msg: "", recipient: "" }
      if (!values.recipient) {
        errors.recipient = "To field is required"
      } else if (values.recipient.length < 3) {
        errors.recipient = "This field must contain minimum 3 letters"
      }
      if (!values.from) {
        errors.from = "From field is required"
      } else if (values.from.length < 3) {
        errors.from = "This field must contain minimum 3 letters"
      }
      if (!values.msg) {
        errors.msg = "Message field is required"
      } else if (values.msg.length < 10) {
        errors.msg = "This field must contain minimum 10 letters"
      }
      if (
        errors.from.length !== 0 ||
        errors.msg.length !== 0 ||
        errors.recipient.length !== 0
      ) {
        return errors
      }
    },
    onSubmit: (values, { resetForm, setSubmitting }) => {
      setSubmitting(true)
      console.log(values)
      setSubmitting(false)
      resetForm()
    },
  })

  return (
    <Layout>
      <SEO title="Virtual Lollipops for all!" />
      <div className="lolly-page__create">
        <div className="lolly-page__create-lolly">
          <Lolly top={topColor} mid={midColor} bottom={bottomColor} />
          <div className="lolly-page__create-lolly__color-input">
            <span>
              <input
                type="color"
                onChange={e => setTopColor(e.target.value)}
                value={topColor}
              />
            </span>
            <span>
              <input
                type="color"
                onChange={e => setMidColor(e.target.value)}
                value={midColor}
              />
            </span>
            <span>
              <input
                type="color"
                onChange={e => setBottomColor(e.target.value)}
                value={bottomColor}
              />
            </span>
          </div>
        </div>
        <div className="lolly-page__create-form">
          <form
            className="lolly-page__create-form__form"
            onSubmit={formik.handleSubmit}
          >
            <div className="lolly-page__create-form__form-content">
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
              <div className="lolly-page__create-form__form-content__msg">
                <label htmlFor="msg">Say Something Nice.</label>
                <br />
                <textarea
                  id="msg"
                  name="msg"
                  cols={30}
                  rows={10}
                  onChange={formik.handleChange}
                  value={formik.values.msg}
                />
                <p className="lolly-page__create-form__form-content__error">
                  {formik.errors.msg && formik.touched.msg
                    ? formik.errors.msg
                    : ""}
                </p>
              </div>
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
              className="lolly-page__create-form__form-btn"
              type="submit"
              disabled={formik.isSubmitting}
            >
              Freeze this lolly and get a link
            </button>
          </form>
        </div>
      </div>
    </Layout>
  )
}

export default CreatePage
