import React from 'react';

class Images extends React.Component {
    render() {
        const { image } = this.props;
        console.log(image);
        return (
            <>
                <div className="col-md-3 mt-5">
                    <img src={image.src.tiny} alt="Not Found"
                        className="img-fluid"
                    />
                </div>
            </>
        );
    }
}
export default Images;