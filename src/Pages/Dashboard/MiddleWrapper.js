import Carousel from "react-multi-carousel";
import { Card, CardBody, CardImg, CardTitle } from "reactstrap";
import img_traceability from '../../Assests/Images/dashboard/traceability.jpg';
import img_tradeability from '../../Assests/Images/dashboard/tradeability.jpg';
import img_reputation_system from '../../Assests/Images/dashboard/reputation_system.jpg';

const MiddleWrapper = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const features = [
    {
      image: img_traceability,
      title: "Transparency",
      description: "Every step of the journey is tracked, proving the authenticity."
    },
    {
      image: img_tradeability,
      title: "Security",
      description: "Only authorised users are able to control the data and due to Distributed and decentralized nature of the data alterations are not possible."
    },
    {
      image: img_reputation_system,
      title: "Increase Trust Base",
      description: `Customer trust grows since we can provide evidence of the authenticity of the ingredients utilised to prepare a dish.`
    }
  ]
  return (
    <div className="middle-wrapper">
      <h5 className="mw-heading" >
      "Explore the journey of the dish you eat🍴😋"
        {/* Stay <b>"Consumer Ready"</b> with Blockchain Powered End To End Consumer Experience Platform */}
      </h5>
      <Carousel responsive={responsive}>
        {features.map((feature, index) => (
          <Card className="border-0" key={index} >
            <CardImg
              src = {feature.image}
              height = "300px"
            />
            <CardBody>
              <CardTitle tag="h5" className="text-center text-uppercase mw-heading">
                {feature.title}
              </CardTitle>
              <span className="mw-sub-heading">
                {feature.description}
              </span>
            </CardBody>
          </Card>
        ))}
      </Carousel>
      <hr/>
    </div>
  )
}
export default MiddleWrapper;