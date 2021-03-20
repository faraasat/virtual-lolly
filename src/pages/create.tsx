import React, { useState } from "react"
import Layout from "../components/layout/layout.component"
import SEO from "../components/seo"
import "./create.css"
import { useFormik } from "formik"
import { Redirect, navigate } from "@reach/router"
import LollyFormComponent from "../components/lolly-form/lolly-form.component"
import ColoredLollyComponent from "../components/colored-lolly/colored-lolly.component"
import shortid from "shortid"
import gql from "graphql-tag"
import { useMutation } from "@apollo/client"
import {
  Backdrop,
  Button,
  CircularProgress,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Link,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core"

const SEND_LOLLY = gql`
  mutation sendLolly(
    $id: ID!
    $top: String!
    $mid: String!
    $bottom: String!
    $recipient: String!
    $from: String!
    $msg: String!
  ) {
    sendLolly(
      id: $id
      top: $top
      mid: $mid
      bottom: $bottom
      recipient: $recipient
      from: $from
      msg: $msg
    ) {
      refId
      id
      top
      mid
      bottom
      recipient
      from
      msg
    }
  }
`

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  })
)

const CreatePage = props => {
  const classes = useStyles()
  const [topColor, setTopColor] = useState<string>("#ed265b")
  const [midColor, setMidColor] = useState<string>("#f77249")
  const [bottomColor, setBottomColor] = useState<string>("#deaa43")
  const [mySubmission, setMySubmission] = useState<boolean>(false)
  const [openDialog, setOpenDialog] = useState<boolean>(false)
  const [myId, setMyId] = useState<string>("")

  const handleClose = () => {
    setOpenDialog(false)
    setMyId("")
  }

  const [sendLolly] = useMutation(SEND_LOLLY)

  const sendMyLolly = async (values: any) => {
    try {
      const res = sendLolly({
        variables: {
          id: values.id,
          top: values.top,
          mid: values.mid,
          bottom: values.bottom,
          recipient: values.recipient,
          from: values.from,
          msg: values.msg,
        },
      })
      const result = res.then(data => {
        return data
      })
      return result
    } catch (error) {
      console.log(error)
    }
  }

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
      setMySubmission(true)
      const id = shortid.generate()
      const obj = {
        id: id,
        top: topColor,
        mid: midColor,
        bottom: bottomColor,
        recipient: values.recipient,
        from: values.from,
        msg: values.msg,
      }
      sendMyLolly(obj).then(data => {
        typeof data !== "undefined"
          ? (setMySubmission(false), setOpenDialog(true), setMyId(id))
          : console.log("No")
      })
      setSubmitting(false)
      resetForm()
      setTopColor("#ed265b")
      setMidColor("#f77249")
      setBottomColor("#deaa43")
    },
  })

  return (
    <Layout>
      <SEO title="Virtual Lollipops for all!" />
      <div className="lolly-page__create">
        <div className="lolly-page__create-lolly">
          <ColoredLollyComponent
            topColor={topColor}
            midColor={midColor}
            bottomColor={bottomColor}
            setTopColor={setTopColor}
            setMidColor={setMidColor}
            setBottomColor={setBottomColor}
          />
        </div>
        <div className="lolly-page__create-form">
          <LollyFormComponent formik={formik} />
        </div>
        <Backdrop className={classes.backdrop} open={mySubmission}>
          <CircularProgress color="inherit" />
        </Backdrop>
        <Dialog
          onClose={handleClose}
          aria-labelledby="customized-dialog-title"
          open={openDialog}
          className="lolly-page__create-dialog"
        >
          <DialogTitle
            id="customized-dialog-title"
            className="lolly-page__create-dialog__typo"
          >
            Created Your Lolly
          </DialogTitle>
          <DialogContent dividers>
            <Typography>
              Please save and share this link! You won't be able to see this
              again.
            </Typography>
            <a
              className="lolly-page__create-dialog__link"
              href={`${props.location.origin}/lollies/${myId}`}
              target="_blank"
            >
              {`${props.location.origin}/lollies/${myId}`}
            </a>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Okay, Got It!
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Layout>
  )
}

export default CreatePage
