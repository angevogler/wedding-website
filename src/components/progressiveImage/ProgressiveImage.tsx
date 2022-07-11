import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

export interface ProgressiveImageProps {
    src: string
    placeholderSrc: string
    alt: string
    width: string
    height: string
}

const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
    src,
    placeholderSrc,
    alt,
    width,
    height,
    ...rest
}) => {
    const [imgSrc, setImgSrc] = useState(placeholderSrc || src)

    useEffect(() => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            setImgSrc(src);
        };
    }, [src])

    return (
        <ProgressiveImageRoot
            {... { src: imgSrc, ...rest }}
            alt={alt}
            isLoading={Boolean(placeholderSrc && imgSrc === placeholderSrc)}
        />
    )
}

export interface ProgressiveImageRootProps {
    isLoading: boolean
}

const ProgressiveImageRoot = styled.img<Pick<ProgressiveImageRootProps, 'isLoading'>>`
    display: block;
    max-width: 100%;
    height: auto;

    ${({ isLoading }) => {
        if (isLoading) {
            return `
                filter: blur(10px);
                clip-path: inset(0);
            `
        }

        return `
            filter: blur(0px);
            transition: filter 0.5s linear;
        `
    }}
`

export default ProgressiveImage
