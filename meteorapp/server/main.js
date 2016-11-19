JsonRoutes.add("get", "/motto/:text", (req, res, next) => {
  const text = req.params.text
  console.log(text)

  JsonRoutes.sendResult(res, {
    data: text,
  })
})
