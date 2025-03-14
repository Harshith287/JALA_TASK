import React, { useState, useEffect } from 'react';
import Header from "../../../Header";
import Sidebar from '../../../Sidebar';
import { FaAngleRight, FaTrash } from 'react-icons/fa';
import { FaTachometerAlt } from "react-icons/fa";

const Images = () => {
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const [images, setImages] = useState([]);

    useEffect(() => {
        const storedImages = JSON.parse(localStorage.getItem('images')) || [];
        setImages(storedImages);
    }, []);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleFileNameChange = (e) => {
        setFileName(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!file || !fileName) {
            alert('Please provide both a file and a name');
            return;
        }

        const reader = new FileReader();
        reader.onloadend = () => {
            const newImage = {
                name: fileName,
                src: reader.result,
            };

            const updatedImages = [...images, newImage];
            localStorage.setItem('images', JSON.stringify(updatedImages));
            setImages(updatedImages); 
            setFile(null); 
            setFileName(''); 
        };

        reader.readAsDataURL(file); 
    };

    const handleDelete = (imageIndex) => {
        const updatedImages = images.filter((_, index) => index !== imageIndex);
        localStorage.setItem('images', JSON.stringify(updatedImages));
        setImages(updatedImages); 
    };

    return (
        <div>
            <Header />
            <div className="image-container d-flex w-100 min-vh-100" style={{ backgroundColor: '#ECEFF1' }}>
                <Sidebar />
                <div className="p-3 w-100">
                    <div className="d-flex justify-content-between">
                        <h4>Uploading/Downloading Image</h4>
                        <p><FaTachometerAlt /> Home <FaAngleRight /> More <FaAngleRight /> Images</p>
                    </div>
                    <div className="p-3">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-5 d-flex flex-column">
                                    <label className="form-label">Select File:</label>
                                    <div className="bg-white p-1">
                                        <input 
                                            type='file' 
                                            accept="image/*" 
                                            onChange={handleFileChange} 
                                        />
                                    </div>
                                </div>
                                <div className="col-md-5 d-flex flex-column">
                                    <label className="form-label">File Name:</label>
                                    <input 
                                        type='text' 
                                        className="form-control" 
                                        value={fileName} 
                                        onChange={handleFileNameChange} 
                                    />
                                </div>
                                <div className="col-md-2 mt-4">
                                    <button type='submit' className="btn btn-success">Upload</button>
                                </div>
                            </div>
                        </form>

                        <div className="image-list mt-4">
                            <h5>Uploaded Images</h5>
                            <div className="d-flex flex-wrap">
                                {images.map((image, index) => (
                                    <div key={index} className="image-item m-2  ">
                                        <div className='d-flex '>
                                        <img 
                                            src={image.src} 
                                            alt={image.name} 
                                            style={{ width: '200px', height: '200px', objectFit: 'cover' }} 
                                        />
                                        <button 
                                            className="btn btn-danger " 
                                            onClick={() => handleDelete(index)}
                                            style={{height:'40px'}}
                                        >
                                            <FaTrash />
                                        </button>
                                        </div>
                                        <h6>{image.name}</h6>
                                    </div>    
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Images;
