import React, { useEffect, useState } from 'react'
import Accomodation from './Accomodation'
import logo from './itemLogo.svg';
import house from './house.svg';
import { Button, Input, Form, FormGroup } from 'reactstrap'
import './Home.css'
import CarouselTemplate from './Carousel';
function Home() {
    var dummyData = [
        {
            title: 'KTXá đường 3/2....Full nội thất, Free điện nước',
            price: '1.600.000 đ/tháng',
            address: '436A/144C đường 3/2, P.12, Q.10',
            area: '20m2',
            phone: '0988153678',
            src: 'https://cdn.chotot.com/BK3dtOBtekOPSHWc7n4IpFXdZujZr1na8mxqOwYuWQk/preset:view/plain/6697c2f0e0d5bcb5a1c7c1cae648ea9c-2635573950639838471.jpg',
        },
        {
            title: 'Phòng trọ ký túc xá sinh viên quận Tân Bình gần Lotte Mart Cộng Hòa',
            price: '1.600.000 đ/tháng',
            address: 'Đường Quách Văn Tuấn, Phường 15, Quận Tân Bình, TP Hồ Chí Minh ',
            area:  '25m2',
            phone: '03847426834',
            src: 'https://img.homedy.com/store/images/2019/10/03/1-637057080571698647.jpg_575x330.jpg',
        },
        {
            title: 'BUNKA HOUSE 345 - KÝ TÚC TRUNG TÂM Q1',
            price: '1.600.000 đ/tháng',
            address: '345/84 Trần Hưng Đạo, P.cầu kho, Q1',
            area :'40m2',
            phone: '0763478543',
            src: 'https://cdn.chotot.com/UmkiXUcT2SotxGq8AEEq1gAJ3iQ95WRfmM2Ji_ds-nA/preset:view/plain/1962545068.jpg',
        },
        {
            title: 'Phòng trọ gần chợ Lê Văn Quới',
            price: '2.000.000 đ/tháng',
            address: '288/19A Lê Văn Quới, Phường Bình Hưng Hòa A Quận Bình Tân',
            area: '15m2',
            phone: '0920343552',
            src: 'https://cdn.chotot.com/4VZz_xNfDfdcgAtwRYGn9D41GKV1T9R4H6VhR4zdlek/preset:view/plain/6169131174.jpg',
        },
        {
            title: 'Phòng Trọ Mini Giá Rẻ Gần Đại học Tôn Đức Thắng',
            price: '2.700.000 đ/tháng',
            address: 'Đường Lê Văn Lương, Phường Tân Hưng, Quận 7',
            area: '22m2',
            phone: '0388153678',
            src: 'https://cdn.chotot.com/z4OWhVG9bZ1f9Tu1tVhNOFK3UjnD2DsG3UowpVGUYpg/preset:view/plain/e520ab0129919a53beec19506cb7ae51-2638960643230664213.jpg',
        },
        {
            title: 'Phòng trọ đường Lê Ngã',
            price: '2.300.000 đ/tháng',
            address: '48/42, Đường Lê Ngã, Phường Phú Trung, Quận Tân Phú',
            area: '12m2',
            phone: '0819364092',
            src: 'https://cdn.chotot.com/NdZWHaFX4_piOtxuhXDqFS_5L-78NHX9qhfqxYp2hvs/preset:view/plain/ad59896a37c11286692b1a2309694790-2639391995105182987.jpg',
        },
    ];

   

    const updateSearch = e => {
        setSearch(e.target.value);
    }
    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
        console.log(search);
        setSearch('');
    }
    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('apple');
    return (
        <div className='home_class'>
            <h1>Home Page</h1>
            <Form className="search-form" onSubmit={getSearch}>
                <FormGroup className='form-group'>
                    <Input className="search-bar" type="text" value={search} onChange={updateSearch} placeholder='Search something...' />
                    <Button className='search-button' type="submit" >Search</Button>
                </FormGroup>
            </Form>
            <div className='home_list'>
                {
                    dummyData.map((item) => (
                        <Accomodation
                            title={item.title}
                            imageurl={house}
                            price={item.price}
                            address = {item.address}
                            area = {item.area}
                            source = {item.src}
                            phone = {item.phone}
                        />
                    ))
                }
            </div>
            <CarouselTemplate/>
        </div>
    );
}

export default Home;