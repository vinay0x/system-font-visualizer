import Head from "next/head";

String.prototype.capitalize = function () {
	return this.charAt(0).toUpperCase() + this.slice(1);
};

const cartesianProduct = (...a) =>
	a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));

export default function Home() {
	const fontSizes = [
		{ value: "xs", name: "12px" },
		{ value: "sm", name: "14px" },
		{ value: "base", name: "16px" },
		{ value: "lg", name: "18px" },
		{ value: "xl", name: "20px" },
		{ value: "2xl", name: "24px" },
		{ value: "3xl", name: "30px" },
	];
	const fontWeights = [
		{ value: "light", name: "300" },
		{ value: "regular", name: "400" },
		{ value: "medium", name: "500" },
		{ value: "semibold", name: "600" },
		{ value: "bold", name: "700" },
		{ value: "extrabold", name: "800" },
	];

	const fontParams = cartesianProduct(fontSizes, fontWeights);
	return (
		<div className="flex flex-col items-center justify-center min-h-screen py-2 font-sans">
			<Head>
				<title>Create Next App</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="p-12">
        <div className="flex flex-col pb-4 space-y-2 border-b border-gray-50">
				<h1 className="text-3xl font-semibold">
					System font rendering visualizer
				</h1>
				<code className="p-4 text-xs rounded bg-gray-50">
					body {"{"} font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
					               Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif; {"}"}
				</code>
        </div>
				{fontParams.map(([fontSize, fontWeight]) => (
					<div className="grid grid-cols-8 p-6 pl-0 border-b border-gray-50">
						<div className="col-span-2 space-y-2 text-xs text-gray-500 rounded">
							{fontSize.name.capitalize()}, {fontWeight.name} weight
						</div>
						<div
							className={`text-${fontSize.value} font-${fontWeight.value} col-span-6`}
						>
							The world looks mighty good to me, cause Tootsie Rolls are all I
							see.
						</div>
					</div>
				))}
			</main>
		</div>
	);
}
