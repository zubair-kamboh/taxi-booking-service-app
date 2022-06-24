const OrderSummaryIcons = ({ title, icon }) => {
  return (
    <div className="icon_wrapper">
      <img src={icon} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default OrderSummaryIcons
