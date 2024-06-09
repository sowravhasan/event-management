

const ShowDetails = (details1) => {
    const {id, img, title} = details1;
    return (
        <div>
            <h1>{title}</h1>
            <img src={img} alt="" />
        </div>
    );
};

export default ShowDetails;