const DotPage = ({ dotId }) => {
    // find the dot with the matching id from your user data
    console.log(dotId);
    const dot = testUser.dots.find((dot) => dot.id === dotId);
    console.log(dotId);
    return (
      <>
        <h1>{dot.firstName} {dot.lastName}</h1>
        {/* display other dot information here */}
      </>
    );
  };
 
export default DotPage;