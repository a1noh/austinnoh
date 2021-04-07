import { Card, CardHeader, CardBody, CardText, CardTitle } from "reactstrap";

const PortfolioCard = ({ portfolio }) => (
  <Card className="portfolio-card">
    <CardHeader className="portfolio-card-header">{portfolio.role}</CardHeader>
    <CardBody>
      <p className="portfolio-card-city">{portfolio.location}</p>
      <CardTitle className="portfolio-card-title hoverCarditle">
        {portfolio.company}
      </CardTitle>
      <CardText className="portfolio-card-text">{portfolio.title}</CardText>
    </CardBody>
  </Card>
);

export default PortfolioCard;
