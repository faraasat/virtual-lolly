import React, { useState } from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./create.css"
import { useFormik } from "formik"
import LollyFormComponent from "../components/lolly-form/lolly-form.component"
import ColoredLollyComponent from "../components/colored-lolly/colored-lolly.component"

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
      <div className="create-page__create">
        <div className="create-page__create-lolly">
          <ColoredLollyComponent
            topColor={topColor}
            midColor={midColor}
            bottomColor={bottomColor}
            setTopColor={setTopColor}
            setMidColor={setMidColor}
            setBottomColor={setBottomColor}
          />
        </div>
        <div className="create-page__create-form">
          <LollyFormComponent formik={formik} />
        </div>
      </div>
    </Layout>
  )
}

export default CreatePage
