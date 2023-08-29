import React, { useRef } from 'react';
import * as P from './PhotoUploader.styles';
import galleryIconUrl from '@assets/icons/icon-gallery.png';
import imageCompression from 'browser-image-compression';

const PhotoUploader = ({ setImgfile, setImgSrc }) => {
    // 사진 업로드 input 태그 접근
    const imageInput = useRef();

    // 사진 업로드 버튼 선택 시 input 태그 클릭
    const onCickImageUpload = () => {
        imageInput.current.click();
    };

    // 사진 미리보기 인코딩(base64)
    const onChangeFile = async (e) => {
        const reader = new FileReader();
        const imageFile = e.target?.files[0];

        const options = {
            maxSizeMB: 3,
            maxWidthOrHeight: 1000,
            useWebWorker: true,
        };

        try {
            const compressedFile = await imageCompression(imageFile, options);
            setImgfile(compressedFile);

            reader.readAsDataURL(compressedFile);
            reader.onloadend = () => {
                const base64data = reader.result;
                setImgSrc(base64data);
            };
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <input
                type="file"
                accept="image/jpg, image/png, image/jpeg"
                style={{ display: 'none' }}
                ref={imageInput}
                onChange={onChangeFile}
            />
            <P.ImgWrap onClick={onCickImageUpload}>
                <img src={galleryIconUrl} />
            </P.ImgWrap>
        </div>
    );
};

export default PhotoUploader;
