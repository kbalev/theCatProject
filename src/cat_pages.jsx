import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const Page = (props) => {
  return (
    <Route exact path={`/${props.id}`}>
      <h1>cats cats cats</h1>
      <h1>{props.name}</h1>
      <img src={props.img} alt={props.name} />
      <p>{props.des}</p>
      <p>price: £{Math.floor(Math.random() * 1000)}</p>
      <Link to="/">Homepage</Link>
    </Route>
  );
};

const Pages = (props) => {
  ;
  //   const items = [];
  for (let i = 0; i < props.data.length; i++) {
    if (props.data[i].image !== undefined) {
      console.log(`/${props.data[i].id}`);

      //   items.push(
      //     <Page
      //       key={i}
      //       name={props.data[i].name}
      //       des={props.data[i].description}
      //       img={props.data[i].image.url}
      //     />
      //   );
    }
  }

  // console.log("items")
  // console.log(items)

  // for(const[index,value] of props.data){
  //     if(value.image !== undefined){
  //         console.log(value.name)
  //     items.push(
  //           <Page key={index} name={value.name} des={value.description} img={value.image.url} /> )
  //         }}
  return (
    <Switch>
      <Route exact path="/">
        <h1>Homepage</h1>
        <Link to="/abys">GO to abys page</Link>
        <Link to="/abob">GO to abob page</Link>
      </Route>

      {/* <Page name={props.data[0].name} des={props.data[0].description} img={props.data[0].image.url} id={props.data[0].id} /> */}

      {/* <Route path={`/${props.data[0].id}`}>
        <h1>cats cats cats</h1>
        <h1>{props.data[1].name}</h1> 
        <img src= {props.data[1].image.url} alt={props.data[1].name}/>
        <p>{props.data[1].description}</p>
        <Link to="/">Homepage</Link>
        </Route> */}

      {/* {props.data.forEach(function (value, index) {
        if (value.image !== undefined) {
          return (
            <Page
              key={index}
              name={value.name}
              des={value.description}
              img={value.image.url}
              id={value.id}
            />
          );
        }
      })} */}

      { props.data.map((value, index) => {
        if (value.image !== undefined){
            console.log(index)
            console.log(value)
          return (
            <Page
              key={index}
              name={value.name}
              des={value.description}
              img={value.image.url}
              id={value.id}
            />
          )}

      })}

      <Route path="/">
        <h1>404</h1>
        <Link to="/">GO to homepage page</Link>
      </Route>
    </Switch>
  );
};

export { Page, Pages };
