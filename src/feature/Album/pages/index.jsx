import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../component/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
    const albumList = [
        {
            id: 1,
            // name: 'Nhạc hot chọn lọc',
            thumbnailUrl: 'https://s3-alpha-sig.figma.com/img/a15a/4d08/b2549db74d0736a6c6038f2c86f73832?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=J0~VZqZhVw4DjmeqkO5kWsI3PPPH8Jbn37sDi7oJ-Vc6WRO~bdFZDggeiaYTH95pWfp0PaviUTbhOrazJJyYQM10iTCMLkrU9N3uI-n5dzGSr2-x295DlGzu~WAcZB3xxQ933qAFKXVQp4ked3ra8izWc2vGNTFQdTK5BPA7Q94rmKZ7c21BiQNvuO~k~DqlFWPNRprnLnleMwoVQIAZ~DgLwh49WH9YEfMtVOgJeXvmLzyJXtMwhd2pMEF~tTr6a51BYxf6fmcUk61FchmJhmsVIH~aKY9IJATP4BSIhMVnHiEOUT6M~ywDzrOUQMA84ii60a9gaHwo3KFKCy~~OQ__'
        },
        // {
        //     id: 2,
        //     name: 'Nhạc hoa lời Việt mới nhât',
        //     thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2024/11/12/0/4/e/c/1731379567907_300.jpg'
        // },
        // {
        //     id: 1,
        //     name: 'V-pop gây bão',
        //     thumbnailUrl: 'https://avatar-ex-swe.nixcdn.com/playlist/2024/06/21/c/b/f/1/1718952939765_300.jpg'
        // }

    ];
    return (
        <div>
            <h2></h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;