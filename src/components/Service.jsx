import React from 'react';
import './Service.css'; 
import { useSelector } from 'react-redux';

const Service = () => {
    const darkMode = useSelector((state) => state.theme.darkMode);  
  return (
    <div className={`service-container ${darkMode ? 'dark' : ''}`}>
      <div className="service-images">
        <img src="https://imgs.search.brave.com/4JpvCCb4WEr5bbBBWsfpGEkQSxeYUatooyVU4i8lC4Q/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wdXRlci1z/Y3JlZW4td2l0aC13/b3JkLWtleWJvYXJk/LWl0XzExMzA0NTct/MTA1NC5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" alt="Service 1" />
        <img src="https://imgs.search.brave.com/yVEVEh-RDG2sSp235Oq7qRWw2EvR__h6v-gZ0aIvL6k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9jb21wdXRlci1l/bmdpbmVlci1mb2N1/c2VkLWxhcHRvcC1z/ZXJ2ZXItcm9vbS1y/ZWZsZWN0aW5nLWRp/Z2l0YWwtdGVjaG5v/bG9neS1pdC1zdXBw/b3J0XzkzNzY3OS02/MDMxMy5qcGc_c2l6/ZT02MjYmZXh0PWpw/Zw" alt="Service 2" />
        <img src="https://imgs.search.brave.com/dQV-i6aulAs3MsgI4xK5rs-3Cb08evy5BRspAcNClTQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA3LzY1LzcxLzc2/LzM2MF9GXzc2NTcx/NzYzMF9GVkcwYWpQ/MnNMWVlxakdEaUll/ZEZhdTJFZER0dTZq/Yi5qcGc" alt="Service 3" />
      </div>
    </div>
  );
}

export default Service;
