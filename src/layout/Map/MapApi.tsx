import { useEffect, useState } from "react";
import markerImg from "../../assets/img/sketch/ic_mark.png";
let mapInstance: naver.maps.Map | null = null;
const loadScript = (src: string, callback: () => void) => {
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = src;
  script.onload = () => callback();
  document.head.appendChild(script);
};

function MapApi({
  latitude,
  longitude,
}: {
  latitude: number;
  longitude: number;
}) {
  const [isMapLoaded, setMapLoaded] = useState(false);
  const initMap = () => {
    // 추가 옵션 설정
    const mapOptions = {
      zoomControl: true,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
      center: new naver.maps.LatLng(latitude, longitude),
      zoom: 16,
    };

    // 지도 초기화 확인
    if (document.getElementById("map")) {
      mapInstance = new naver.maps.Map("map", mapOptions);
    }

    // var map = new naver.maps.Map("map", {
    //   center: new naver.maps.LatLng(latitude, longitude),
    //   zoom: 10,
    // });

    // Marker 생성
    const marker = new naver.maps.Marker({
      map: mapInstance ?? undefined,
      position: new naver.maps.LatLng(latitude, longitude),
      icon: {
        url: markerImg,
        scaledSize: new naver.maps.Size(35, 35),
      },
    });

    // Marker 클릭 시 지도 초기화
    naver.maps.Event.addListener(marker, "click", () => {
      mapInstance?.setCenter(new naver.maps.LatLng(latitude, longitude));
      mapInstance?.setZoom(16);
    });

    // 지도 로드 완료
    setMapLoaded(true);
  };
  useEffect(() => {
    // 스크립트 로딩 확인
    if (typeof naver === "undefined") {
      loadScript(
        "https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ifcvflgu9c",
        initMap
      );
    } else {
      initMap();
    }
  }, [latitude, longitude]);

  return (
    <>
      <div id="map" style={{ height: "190px" }}></div>
    </>
  );
}
export default MapApi;
