import React from 'react'
import { whileStatement } from '@babel/types';
import { Link,Redirect } from 'react-router-dom';
import './Accomodation.css'
var dummyData = [
    {
        title: 'KTXá đường 3/2....Full nội thất, Free điện nước',
        price: '1.600.000 đ/tháng',
        address: '436A/144C đường 3/2, P.12, Q.10',
        area: '20m2',
        src: 'https://cdn.chotot.com/BK3dtOBtekOPSHWc7n4IpFXdZujZr1na8mxqOwYuWQk/preset:view/plain/6697c2f0e0d5bcb5a1c7c1cae648ea9c-2635573950639838471.jpg',
    },
    {
        title: 'Phòng trọ ký túc xá sinh viên quận Tân Bình gần Lotte Mart Cộng Hòa',
        price: '1.600.000 đ/tháng',
        adress: 'Đường Quách Văn Tuấn, Phường 15, Quận Tân Bình, TP Hồ Chí Minh ',
        area:  '25m2',
        src: 'https://img.homedy.com/store/images/2019/10/03/1-637057080571698647.jpg_575x330.jpg',
    },
    {
        title: 'BUNKA HOUSE 345 - KÝ TÚC TRUNG TÂM Q1',
        price: '1.600.000 đ/tháng',
        address: '345/84 Trần Hưng Đạo, P.cầu kho, Q1',
        area :'40m2',
        src: 'https://cdn.chotot.com/UmkiXUcT2SotxGq8AEEq1gAJ3iQ95WRfmM2Ji_ds-nA/preset:view/plain/1962545068.jpg',
    },
    {
        title: 'Phòng trọ gần chợ Lê Văn Quới',
        price: '2.000.000 đ/tháng',
        address: '288/19A Lê Văn Quới, Phường Bình Hưng Hòa A Quận Bình Tân',
        area: '15m2',
        src: 'https://cdn.chotot.com/4VZz_xNfDfdcgAtwRYGn9D41GKV1T9R4H6VhR4zdlek/preset:view/plain/6169131174.jpg',
    },
    {
        title: 'Phòng Trọ Mini Giá Rẻ Gần Đại học Tôn Đức Thắng',
        price: '2.700.000 đ/tháng',
        address: 'Đường Lê Văn Lương, Phường Tân Hưng, Quận 7',
        area: '22m2',
        src: 'https://cdn.chotot.com/z4OWhVG9bZ1f9Tu1tVhNOFK3UjnD2DsG3UowpVGUYpg/preset:view/plain/e520ab0129919a53beec19506cb7ae51-2638960643230664213.jpg',
    },
    {
        title: 'Phòng trọ đường Lê Ngã',
        price: '2.300.000 đ/tháng',
        address: '48/42, Đường Lê Ngã, Phường Phú Trung, Quận Tân Phú',
        area: '12m2',
        src: 'https://cdn.chotot.com/NdZWHaFX4_piOtxuhXDqFS_5L-78NHX9qhfqxYp2hvs/preset:view/plain/ad59896a37c11286692b1a2309694790-2639391995105182987.jpg',
    },
    {
        title: 'Ở ghép nam, nữ gò vấp 1,2tr/tháng. ( máy lạnh)',
        price: '1.200.000 đ/tháng',
        address: '347/37, Đường Lê Văn Thọ, Phường 9, Quận Gò Vấp',
        area: '247m2',
        src: 'https://cdn.chotot.com/x81u3vNS43L8c9o6kg6n6fKgVeLL1q0Bgsi6BD387dQ/preset:view/plain/844f8ea5dc4f7e3cb9998ce86f2d081c-2629782342499637701.jpg',
    },
    {
        title: 'Phòng rẻ có ban công,sân thượng gần DH hồng bàng',
        price: '4.600.000 đ/tháng',
        address: '117/28, Đường Điện Biên Phủ, Phường 15, Quận Bình Thạnh',
        area: '30m2',
        src: 'https://cdn.chotot.com/niP9hXSaCGCUwOuj1CGLgSN_mCeSO2F-GEIMDVFaKGw/preset:view/plain/f35dab85c2a2e84a0bfe3501074a45cf-2638952415052700419.jpg',
    },
    {
        title: 'Phòng trọ 25m2 đường phạm văn chiêu,cây trâm',
        price: '3.200.000 đ/tháng',
        address: 'Hẻm 111 Phạm Văn Chiêu, P14, Gò Vấp',
        area: '2m2',
        src: 'https://cdn.chotot.com/ItKWxya986WJ3TgRTfoNfXroGQbW1MWAZniKZH1v0Kk/preset:view/plain/adaec77a52608cb74a56b86ad31a6c54-2639653093873425155.jpg',
    },
    {
        title: 'Cho thuê phòng ktx quận 1',
        price: '1.950.000 đ/tháng',
        address: '115/57, Đường Trần Đình Xu, Phường Nguyễn Cư Trinh, Quận 1',
        area: '30m2',
        src: 'https://cdn.chotot.com/8-xGe3dTfq5o3CcdDZau4MJTcU0SHyUdlDKtKgmJ7VA/preset:view/plain/9ef1d2c5ca1af6f9fe2ced4b38163072-2637805561945457938.jpg',
    },
    {
        title: 'cho thuê phòng trọ quận 8 đường Dương Bá Trạc',
        price: '4.000.000 đ/tháng',
        address: '28A/17, Đường Dương Bá Trạc, Phường 2, Quận 8',
        area: '42m2',
        src: 'https://cdn.chotot.com/_22WbXHhX4uHrA8sDBtCIzxe5oijT_kcma1tQubHgZY/preset:view/plain/cd6ef9f4ebcf83d29823226ef9cce9f6-2639652878087035651.jpg',
    },
    {
        title: 'Phong trọ 10m2 lầu1,Quang trung P.10 GV',
        price: '1.200.000 đ/tháng',
        address: 'Đường Quang Trung, Phường 10, Quận Gò Vấp',
        area: '10m2',
        src: 'https://cdn.chotot.com/OkpodAWBwCy_QXab2jiTj7U6fokf9Tc-yVEJ_P50yGA/preset:view/plain/c33178321f8666cbc2a6cc505e262195-2636738634932624131.jpg',
    },
    {
        title: 'cho thuê phòng giờ tự do,nấu ăn ,tolet riêng 18m²',
        price: '2.000.000 đ/tháng',
        address: '16, Đường Trường Chinh, Phường 4, Quận Tân Bình',
        area: '18m2',
        src: 'https://cdn.chotot.com/D3r8ylLmviExOZepA5F7OK3LDts5Yt8FKehI4C5Zrn4/preset:view/plain/8362905351.jpg',
    },
    {
        title: 'Phòng cao cấp, có gác, bếp',
        price: '3.700.000 đ/tháng',
        address: '220, Đường Đội Cung, Phường 9, Quận 11, Tp Hồ Chí Minh',
        area: '25m2',
        src: 'https://cdn.chotot.com/zgkYdLPCOqdU9xHdnxX_58UKEg7eDiwwYT_vaseVeGs/preset:view/plain/79f500ed6f4f5e847f4a19005a50fcf8-2635602822580933895.jpg',
    },
    {
        title: 'PHÒNG TRỌ 16M2 ĐƯỜNG PHỔ QUANG, Q. TÂN BÌNH',
        price: '4.200.000 đ/tháng',
        address: '54/27, Đường Phổ Quang, Phường 2, Quận Tân Bình',
        area: '16m2',
        src: 'https://cdn.chotot.com/Gk4pG0w7MvXFmAylcvERuUjU185sfH8BEsCxiGK3TEg/preset:view/plain/c471de48b6e7c3a85cee9cb1537866b3-2638770275342091921.jpg',
    },
    {
        title: 'CẦN NAM/NỮ Ở GHÉP',
        price: '1.500.000 đ/tháng',
        address: '86/16, Đường Nhất Chi Mai, Phường 13, Quận Tân Bình',
        area: '20m2',
        src: 'https://cdn.chotot.com/b-2YmQIRn82jhwvv7BmUGWpQpEvj_cdeAbRd1r2brbM/preset:view/plain/56609adf24227bb5e8ed1772579272aa-2639496120144823114.jpg',
    },
    {
        title: 'Cho thuê phòng trọ khu vực đường D11, Q. Tân Phú',
        price: '2.500.000 đ/tháng',
        address: 'Đường D11, Phường Tây Thạnh, Quận Tân Phú',
        area: '15m2',
        src: 'https://cdn.chotot.com/i0KZ7pCsgLyrFdF8CXg2nqXKMUIFIDuJaRdT4wkEHds/preset:view/plain/b6cbe0bccdcca46406f06709d1bad0e2-2639508595884956419.jpg',
    },
    {
        title: 'Phòng trọ Quận Bình Thạnh 28m²',
        price: '5.000.000 đ/tháng',
        address: '32/11, bùi đình tuý, Phường 12, Quận Bình Thạnh',
        area: '28m2',
        src: 'https://cdn.chotot.com/IPDTfq3HYoJt-HcmHp-ojB7fj6i92nlNgPSqaA4wP4A/preset:view/plain/dd6c7d3b70115a4fd22331160f6cf25a-2634452095903013251.jpg',
    },
    {
        title: 'Còn dư phòng như hình, 35m2, wc bên trong.CMT8',
        price: '4.600.000 đ/tháng',
        address: 'Đường Cách Mạng Tháng Tám, Phường 11, Quận 3',
        area: '40m2',
        src: 'https://cdn.chotot.com/w8ByFU0MkSYpxS41K5hLXhGWWRm9-K-Bofx2d218x7c/preset:view/plain/d0730b4f36d5b0064dbc3b06ee5463ab-2639493776012876547.jpg',
    },
    {
        title: 'Phòng Cao Cấp ĐỐI DIỆN LANDMARK 81',
        price: '6.300.000 đ/tháng',
        address: '135/37 Nguyễn Hữu Cảnh, P22, Q Bình Thạnh',
        area: '26m2',
        src: 'https://cdn.chotot.com/VTss4IIAyDloVvlYjrMu3wobjk6HoHmE65JvxGzy3tM/preset:view/plain/4415269814d75947321208def235daf3-2638084520352553731.jpg',
    },
    {
        title: 'Phòng trọ quận 1 cho 1 ngươi ở',
        price: '2.000.000 đ/tháng',
        address: '36, nguyễn cảnh, Phường Nguyễn Cư Trinh, Quận 1',
        area: '10m2',
        src: 'https://cdn.chotot.com/UT80B4bzpA2lpIW0Jj2gY2re4DglyiCET41TnXI2R3A/preset:view/plain/4879112564.jpg',
    },
    {
        title: 'CHO NỮ THUÊ PHÒNG TRỌ . Nhà có vị trí thuận lợi',
        price: '4.500.000 đ/tháng',
        address: '212B../.... Nguyễn Trãi, Phường Nguyễn Cư Trinh , Quận 1, TP. Hồ Chí Minh',
        area: '19m2',
        src: 'https://cdn.chotot.com/KvbVzzsrim8Q5eTiNkpYWfJquZkG1V4XLDiZ2VvhvK0/preset:view/plain/4920661165.jpg',
    },
    {
        title: 'Cho thuê phòng trọ quận Tân Bình',
        price: '2.200.000 đ/tháng',
        address: '13/80 Trần Văn Hoàng phường 9 quận Tân Bình',
        area: '15m2',
        src: 'https://cdn.chotot.com/wlbZfIIGQZy_SEtkseEG1SDJXbmBcqPFYEhddgdhN5I/preset:view/plain/293242896.jpg',
    },
    {
        title: 'Phòng trọ Quận Bình Thạnh 29m² dạng dorm',
        price: '1.790.000 đ/tháng',
        address: '13/1, Đường D2, Phường 25, Quận Bình Thạnh',
        area: '29m2',
        src: 'https://cdn.chotot.com/NrluXiECo6fpQlbwraC11s85r-y4XQbQwTBPgpUZTcU/preset:view/plain/b1749a1fa06527db8e253c8f1548da30-2635010844984940931.jpg',
    },
    {
        title: 'Cần 2 Nữ ở ghép',
        price: '1.200.000 đ/tháng',
        address: '139 Lê Văn Lương, Xã Phước Kiển, Huyện Nhà Bè',
        area: '12m2',
        src: 'https://cdn.chotot.com/_Uc_73LZ4NeqbzrG6Gcj24Mll3HTJUhs_aJbZ_7wcZ0/preset:view/plain/84d436652d5e9381b31b1f4cfdcd3c62-2639653493214544714.jpg',
    },
    {
        title: 'Homestay Hoang Phuc cao cấp ngay khu chế xuất',
        price: '700.000 đ/tháng',
        address: '1134, Đường Huỳnh Tấn Phát, Phường Tân Phú, Quận 7',
        area: '20m2',
        src: 'https://cdn.chotot.com/S9HC_LH6fhpIGP4i6AtA_Kwp8ryhf1QU9OaVDLmOKpY/preset:view/plain/8793533989.jpg',
    },
    {
        title: 'Phòng trọ 25m2, full nội thất, máy lạnh, Tân Bình',
        price: '3.500.000 đ/tháng',
        address: '405/15, Đường Trường Chinh, Phường 14, Quận Tân Bình',
        area: '24m2',
        src: 'https://cdn.chotot.com/8710V7kQUnxzrD54DCkeRg7CvTe7B_8y5_CWJzFRGI0/preset:view/plain/dcffc2641eb4903943d5a64bd10199c4-2627310075041027938.jpg',
    },
    {
        title: 'Phòng học, hội họp',
        price: '1.500.000 đ/tháng',
        address: 'Đường Chu Văn An, Phường 26, Quận Bình Thạnh',
        area: '16m2',
        src: 'https://cdn.chotot.com/1v74uAAaILN2mrhypCMM-RS9kF-P8JIqi_TTgo1gewI/preset:view/plain/bcbad44a35863aae446a37100326e192-2639590751778642691.jpg',
    },
    {
        title: 'Phòng trọ 58 Tân Thành, Q.TP cách ĐH Văn Hiến 500m',
        price: '2.100.000 đ/tháng',
        address: '58 Tân Thành, Phường Tân Thành, Quận Tân Phú, Phường Tân Thành, Quận Tân Phú',
        area: '16m2',
        src: 'https://cdn.chotot.com/qX0KCTmlgWCgjWzgh8YLZet0Apwp_ZaFBXQAIGPVQVA/preset:view/plain/2785812595.jpg',
    },
    {
        title: 'Phòng trọ Quận 2. An Ninh. Gần Cảng Cát Lái 19m2',
        price: '2.500.000 đ/tháng',
        address: '42/3A, Đường Số 20, Phường Thạnh Mỹ Lợi, Quận 2',
        area: '19m2',
        src: 'https://cdn.chotot.com/fLu_JTK7uLraYaA7G6hMgl4XgvqJKU4G0r4LpP-vk0o/preset:view/plain/9886772a8ad1b2f08a2812cbc992b9ce-2629363494536419251.jpg',
    },
];
class Accomodation extends React.Component {

    
    itemClick = (item) => {
        console.log('OK',item)
        return  <Redirect  to= { { pathname: "/details", state: {title: dummyData.title}} }/>
       
    }
    onSubmit = () => {
        
 }

    render() {
        const { title, price, address, area, source, phone} = this.props;
        return (
            // <Link to={'https://www.google.com/maps/place/' + address} className='item_link'>
            <a href={'https://www.google.com/maps/place/' + address} target="_blank">
                <div className='accomodation_class' onClick={() => this.itemClick(title)}>
                    <div class="parent">
                        <div class="child-left">
                            <img src={source} className='item_image' />
                        </div>

                        <div class="child-right">
                            <h2 className='item_title'>{title}</h2>
                            <div class="parent-text">
                                <div class="child-left-text">
                                    <h5>Giá tiền: </h5>
                                </div>

                                <div class="child-right-text">
                                    {price}
                                </div>
                            </div>

                            <div class="parent-text">
                                <div class="child-left-text">
                                    <h5>Địa chỉ: </h5>
                                </div>

                                <div class="child-right-text">
                                    {address}
                                </div>
                            </div>

                            <div class="parent-text">
                                <div class="child-left-text">
                                    <h5>Diện tích: </h5>
                                </div>

                                <div class="child-right-text">
                                    {area}
                                </div>
                            </div>

                            <div class="parent-text">
                                <div class="child-left-text">
                                    <h5>Phone: </h5>
                                </div>

                                <div class="child-right-text">
                                    {phone}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </a>
            // </Link>
        );
    }
}

export default Accomodation;