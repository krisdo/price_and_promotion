//creates a new product
app.post('/PriceAndPromotion', (req, res) => {

  let priceAndPromotionData = req.body;

  //needs to have all fields to post record
  if(!priceAndPromotionData.product_id || !priceAndPromotionData.price || !priceAndPromotionData.start || !priceAndPromotionData.expiry) {
    res.status(400).send('Missing Field(s)');
  } else {
    PriceAndPromo.create(priceAndPromotionData)
    .then( () => {
      res.status(201).send('Post Successful');
    })
    .catch( (err) => {
      res.status(404).send(err);
    });
  }
});

//deletes document
PriceAndPromo.deleteOne({ product_id: id })
.then( () => {
  res.status(200).send('Delete Successful');
})
.catch( err => {
  res.status(404).send(err);
});


//edits a record based on product id
app.put('/PriceAndPromotion/:product_id', (req, res) => {

  let id = req.params.product_id;
  let newData = req.body;

  return PriceAndPromo.updateOne({ product_id: id }, newData)
  .then( () => {
    res.status(200).send('Update Successful');
  })
  .catch((err) => {
    res.status(404).send(err);
  })
});

//creates document
app.post('/PriceAndPromotion', (req, res) => {

  let priceAndPromotionData = req.body;
  console.log(priceAndPromotionData);

  //needs to have all fields to post record
  if(!priceAndPromotionData.product_id || !priceAndPromotionData.price || !priceAndPromotionData.start || !priceAndPromotionData.expiry) {
    res.status(400).send('Missing Field(s)');
  } else {
    PriceAndPromo.create(priceAndPromotionData)
    .then( () => {
      res.status(201).send('Post Successful');
    })
    .catch( (err) => {
      res.status(404).send(err);
    });
  }
});