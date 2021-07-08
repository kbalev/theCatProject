import { Route, Link } from "react-router-dom";
import StarRatingComponent from "react-star-rating-component";
import styled from "styled-components";
const StyledContainer = styled.div`
  margin: 10px;
  padding: 10px;
  text-align: center;
  color: grey;
  h1 {
    text-align: center;
  }
  img {
    margin: auto;
    max-width: 80%;
    max-height:50vh;
  }

  .starsList {
    
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around
  }
  .starvalues {
    width:150px
    
  }
 .moreInfo{
    display: flex;
    justify-content:center
  }
  .links{
    width:80px
  }
`;

const Page = (props) => {
  return (
    <StyledContainer>
      <h1>{props.value.name}</h1>
      <img src={props.value.image.url} alt={props.value.name} />
      <p>{props.value.temperament}</p>

      <div>
        <h2>General information</h2>
        <p>{props.value.description}</p>
        <p>The averge life span {props.value.life_span} years </p>
        <p>The averge weight {props.value.weight.metric}kg </p>
      </div>
      <div className="starsList">
        <div className="starvalues">
          <h4>Adaptability</h4>
          <StarRatingComponent
            value={props.value.adaptability}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Affection Level</h4>
          <StarRatingComponent
            value={props.value.affection_level}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Child Friendliness</h4>
          <StarRatingComponent
            value={props.value.child_friendly}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Dog Friendliness</h4>
          <StarRatingComponent
            value={props.value.dog_friendly}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Energy Level</h4>
          <StarRatingComponent
            value={props.value.energy_level}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Grooming</h4>
          <StarRatingComponent
            value={props.value.grooming}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Health Issues</h4>
          <StarRatingComponent
            value={props.value.health_issues}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Intelligence</h4>
          <StarRatingComponent
            value={props.value.intelligence}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Shedding Level</h4>
          <StarRatingComponent
            value={props.value.shedding_level}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Social Needs</h4>
          <StarRatingComponent
            value={props.value.social_needs}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Stranger Friendliness</h4>
          <StarRatingComponent
            value={props.value.stranger_friendly}
            name={props.value.name}
          />
        </div>
        <div className="starvalues">
          <h4>Vocalisation</h4>
          <StarRatingComponent
            value={props.value.vocalisation}
            name={props.value.name}
          />
        </div>
      </div> 
      <h3>More information</h3> 
        <div className="moreInfo">
          
          <a className="links" href={props.value.cfa_url}>CFA</a>
          <a className="links" href={props.value.vetstreet_url}>Vetstreet</a>
          <a className="links" href={props.value.wikipedia_url}>Wikipedia</a>
        </div>
      

      <Link to="/">Homepage</Link>
    </StyledContainer>
  );
};

const Pages = (props) => {
  

  return (
    <div>
      <Route exact path="/">
        <h1>Homepage</h1>
        <Link to="/abys">GO to abys page</Link>
        <Link to="/abob">GO to abob page</Link>

        <Link to="/pers">GO to pers page</Link>
      </Route>

      {props.data.map((value, index) => {
        if (value.image !== undefined) {
          return (
            <Route key={index}
              path={`/${value.id}`}
              children={<Page  value={value} />}
            />
          );
        }
      })}

      
    </div>
  );
};

export { Page, Pages };
