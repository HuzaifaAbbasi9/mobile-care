
const Img = ({ src, alt, ...rest }) => {
    const getImageName = (url) => {
        const parts = url.split('/');
        const fileName = parts[parts.length - 1];
        return fileName.split('.')[0];
    };

    const altText = alt || getImageName(src);

    return <img src={src} alt={altText} {...rest} />;
};

export { Img };
