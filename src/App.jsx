import { useState, useEffect } from "react";
import "./App.css";

function App() {
	const [count, setCount] = useState(Number(localStorage.getItem("count")) ?? 0);

	function incrementarContador() {
    if (count === 10) return;
		setCount(prevCount => prevCount + 1);
	}

	function decrementarContador() {
    if (count === 0) return;
		setCount(prevCount => prevCount - 1);
	}

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

	return (
		<>
			<section id="center">
				<div
					className="hero"
					style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%" }}
				>
					<DevstartLogo height={100} width={400} />
				</div>
				<div>
					<h1 style={{ lineHeight: "32px"}}>Contador de cliques</h1>
				</div>
				<div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", gap: "10px"}}>
					<button type="button" className="counter" onClick={decrementarContador}>
						-
					</button>
					<button type="button" className="counter" disabled>
						Contador: {count}
					</button>
					<button type="button" className="counter" onClick={incrementarContador}>
						+
					</button>
				</div>
        {(count > 0 && count < 10) ? <p>Continue alterando o valor.</p> : null}
        {count === 0 && <p>O valor mínimo é 0.</p>}
        {count === 10 && <p>O valor máximo é 10.</p>}
			</section>
		</>
	);
}

function DevstartLogo(props) {
	const { height, width } = props;
	return (
		<svg width={width} height={height} viewBox="0 0 114 24" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path
				d="M107.578 4.84731V8.86268H106.058C105.723 8.86268 105.421 9.14572 105.421 9.48143C105.421 9.81711 105.723 10.1331 106.058 10.1331H107.578V19.5725C107.578 22.3174 109.349 23.5286 111.533 23.5286C112.338 23.5286 112.969 23.3575 113.524 23.16C113.8 23.0481 113.968 22.8506 113.968 22.5675C113.968 22.2253 113.666 21.9423 113.362 21.9423C113.169 21.9423 112.725 22.2253 111.758 22.2253C110.128 22.2253 108.937 21.4881 108.937 19.4277V10.1331H113.362C113.697 10.1331 114 9.85005 114 9.51437C114 9.17864 113.697 8.86268 113.362 8.86268H108.937V4.84731C108.937 4.45236 108.634 4.14298 108.248 4.14298C107.855 4.14298 107.578 4.45236 107.578 4.84731Z"
				fill="url(#paint0_linear_11546_28501)"
			/>
			<path
				d="M96.624 12.6107V9.10222C96.624 8.68091 96.3213 8.39785 95.9348 8.39785C95.5484 8.39785 95.2714 8.70724 95.2714 9.10222V22.3331C95.2714 22.7545 95.5741 23.0374 95.9606 23.0374C96.3471 23.0374 96.624 22.7281 96.624 22.3331V17.021C96.624 12.3869 99.3101 10.0961 102.293 9.81316C102.737 9.78675 103.014 9.44454 103.014 9.0495C103.014 8.62825 102.711 8.28595 102.293 8.28595C100.302 8.28595 97.8415 9.80653 96.624 12.6107Z"
				fill="url(#paint1_linear_11546_28501)"
			/>
			<path
				d="M80.4978 18.6601V18.6009C80.4978 16.5932 82.1597 15.2372 85.142 15.2372C87.1582 15.2372 88.7364 15.5729 89.928 15.8889V17.5278C89.928 20.1543 87.4674 21.9645 84.5881 21.9645C82.4302 21.9711 80.4978 20.7533 80.4978 18.6601ZM80.6911 9.36554C80.5494 9.42478 80.3046 9.6485 80.3046 9.98429C80.3046 10.32 80.6074 10.6359 80.9423 10.6359C81.0261 10.6359 81.1356 10.6096 81.245 10.5503C82.4045 9.98429 83.7057 9.58926 85.258 9.58926C88.163 9.58926 89.9022 11.0902 89.9022 13.9997V14.6184C88.5495 14.2498 87.1905 13.9997 85.2258 13.9997C81.5736 13.9997 79.055 15.6979 79.055 18.693V18.7522C79.055 21.7473 81.8763 23.2744 84.5044 23.2744C87.1905 23.2744 88.9296 21.9184 89.8958 20.5361V22.3463C89.8958 22.7676 90.1728 23.0506 90.5592 23.0506C90.9458 23.0506 91.2227 22.7676 91.2227 22.3463V13.9404C91.2227 12.1565 90.7268 10.8334 89.7863 9.87233C88.7621 8.82572 87.2419 8.28595 85.3353 8.28595C83.5382 8.29253 82.1275 8.71382 80.6911 9.36554Z"
				fill="url(#paint2_linear_11546_28501)"
			/>
			<path
				d="M69.9671 4.84731V8.86268H68.4469C68.1184 8.86268 67.8092 9.14572 67.8092 9.48143C67.8092 9.81711 68.1119 10.1331 68.4469 10.1331H69.9671V19.5725C69.9671 22.3174 71.7384 23.5286 73.9221 23.5286C74.7272 23.5286 75.3585 23.3575 75.9125 23.16C76.1894 23.0481 76.3569 22.8506 76.3569 22.5675C76.3569 22.2253 76.0541 21.9423 75.7514 21.9423C75.5581 21.9423 75.1137 22.2253 74.1475 22.2253C72.5178 22.2253 71.3261 21.4881 71.3261 19.4277V10.1331H75.7514C76.0864 10.1331 76.3891 9.85005 76.3891 9.51437C76.3891 9.17864 76.0864 8.86268 75.7514 8.86268H71.3261V4.84731C71.3261 4.45236 71.0234 4.14298 70.6369 4.14298C70.2505 4.14298 69.9671 4.45236 69.9671 4.84731Z"
				fill="url(#paint3_linear_11546_28501)"
			/>
			<path
				d="M55.3681 12.275V12.3342C55.3681 14.908 57.9123 15.6123 60.2055 16.2903C62.1702 16.8565 63.9415 17.4752 63.9415 19.1735V19.2328C63.9415 20.8982 62.4471 21.9711 60.5404 21.9711C58.8528 21.9711 57.3069 21.4051 55.8383 20.332C55.7288 20.2465 55.5613 20.1939 55.3938 20.1939C55.0331 20.1939 54.7304 20.5032 54.7304 20.8718C54.7304 21.0956 54.8721 21.326 54.9815 21.4116C56.418 22.5109 58.55 23.2745 60.4567 23.2745C63.1685 23.2745 65.3264 21.6354 65.3264 19.0616V19.0023C65.3264 16.4615 62.9496 15.6123 60.6822 14.9607C58.6596 14.3682 56.753 13.7758 56.753 12.1631V12.1039C56.753 10.6622 58.0219 9.58928 59.9608 9.58928C61.3134 9.58928 62.6726 10.0435 63.8899 10.7742C63.9737 10.8334 64.1089 10.886 64.2765 10.886C64.6372 10.886 64.9399 10.5767 64.9399 10.208C64.9399 9.89866 64.7466 9.70125 64.5792 9.58276C63.2265 8.7928 61.5388 8.28595 60.0187 8.28595C57.2747 8.29254 55.3681 9.9579 55.3681 12.275Z"
				fill="url(#paint4_linear_11546_28501)"
			/>
			<path
				d="M33.9603 0.039494C33.4707 0.184311 33.3354 0.724086 33.5351 1.20461L41.355 23.2233C41.516 23.6973 41.7672 24 42.2052 24H42.2567C42.6947 24 42.9395 23.6973 43.107 23.2233L50.9525 1.13879C51.178 0.539775 50.8753 0.184312 50.6241 0.07899C50.0637 -0.1514 49.7416 0.289632 49.6064 0.664841L42.2567 21.8738L34.933 0.697747C34.817 0.355457 34.5786 0 34.1857 0C34.1148 0 34.0376 0.0131633 33.9603 0.039494Z"
				fill="url(#paint5_linear_11546_28501)"
			/>
			<path
				d="M19.3405 0C18.954 0 18.6255 0.40154 18.6255 0.875486V22.7625C18.6255 23.2365 18.954 23.638 19.3405 23.638H31.8753C32.2297 23.638 32.5324 23.2694 32.5324 22.8284C32.5324 22.3874 32.2297 22.0186 31.8753 22.0186H20.0555V12.5267H30.5098C30.864 12.5267 31.1668 12.158 31.1668 11.717C31.1668 11.2759 30.864 10.9073 30.5098 10.9073H20.0555V1.61931H31.74C32.0944 1.61931 32.3971 1.24411 32.3971 0.809655C32.3971 0.375201 32.0944 0 31.74 0H19.3405Z"
				fill="url(#paint6_linear_11546_28501)"
			/>
			<path
				d="M1.42354 1.61931H6.38983C11.7426 1.61931 15.1114 6.21394 15.1114 11.8157V11.8815C15.1114 17.5228 11.7362 22.0121 6.38983 22.0121H1.42354V1.61931ZM0.714987 0C0.32851 0 0 0.40154 0 0.875486V22.7625C0 23.2365 0.32851 23.638 0.714987 23.638H6.38983C12.4254 23.638 16.5994 18.4707 16.5994 11.8157V11.7498C16.5994 5.0949 12.4318 0 6.38983 0H0.714987Z"
				fill="url(#paint7_linear_11546_28501)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_11546_28501"
					x1="114"
					y1="12"
					x2="1.37702e-05"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#5B3CBE" />
					<stop offset="0.440625" stop-color="#CE4E8E" />
					<stop offset="1" stop-color="#5B3CBE" />
				</linearGradient>
				<linearGradient
					id="paint1_linear_11546_28501"
					x1="114"
					y1="12"
					x2="1.37702e-05"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#5B3CBE" />
					<stop offset="0.440625" stop-color="#CE4E8E" />
					<stop offset="1" stop-color="#5B3CBE" />
				</linearGradient>
				<linearGradient
					id="paint2_linear_11546_28501"
					x1="114"
					y1="12"
					x2="1.37702e-05"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#5B3CBE" />
					<stop offset="0.440625" stop-color="#CE4E8E" />
					<stop offset="1" stop-color="#5B3CBE" />
				</linearGradient>
				<linearGradient
					id="paint3_linear_11546_28501"
					x1="114"
					y1="12"
					x2="1.37702e-05"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#5B3CBE" />
					<stop offset="0.440625" stop-color="#CE4E8E" />
					<stop offset="1" stop-color="#5B3CBE" />
				</linearGradient>
				<linearGradient
					id="paint4_linear_11546_28501"
					x1="114"
					y1="12"
					x2="1.37702e-05"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#5B3CBE" />
					<stop offset="0.440625" stop-color="#CE4E8E" />
					<stop offset="1" stop-color="#5B3CBE" />
				</linearGradient>
				<linearGradient
					id="paint5_linear_11546_28501"
					x1="114"
					y1="12"
					x2="1.37702e-05"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#5B3CBE" />
					<stop offset="0.440625" stop-color="#CE4E8E" />
					<stop offset="1" stop-color="#5B3CBE" />
				</linearGradient>
				<linearGradient
					id="paint6_linear_11546_28501"
					x1="114"
					y1="12"
					x2="1.37702e-05"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#5B3CBE" />
					<stop offset="0.440625" stop-color="#CE4E8E" />
					<stop offset="1" stop-color="#5B3CBE" />
				</linearGradient>
				<linearGradient
					id="paint7_linear_11546_28501"
					x1="114"
					y1="12"
					x2="1.37702e-05"
					y2="12"
					gradientUnits="userSpaceOnUse"
				>
					<stop stop-color="#5B3CBE" />
					<stop offset="0.440625" stop-color="#CE4E8E" />
					<stop offset="1" stop-color="#5B3CBE" />
				</linearGradient>
			</defs>
		</svg>
	);
}

export default App;
