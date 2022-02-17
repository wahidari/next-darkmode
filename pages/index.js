import Head from "next/head";
import Image from "next/image";
import MyNavbar from "../components/MyNavbar";

export default function Home() {
	return (
		<>
			<style jsx>
				{`
					.card {
						background: var(--bg-color-secondary);
					}
				`}
			</style>

			<Head>
				<title>Create Next App</title>
				<meta
					name="description"
					content="Generated by create next app"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<MyNavbar />

			<main>
				<section className="py-4 text-center container">
					<div className="row py-lg-3">
						<div className="col-lg-6 col-md-8 mx-auto">
							<h1 className="text-color-primary">Album example</h1>
							<p className="lead text-color-secondary">
								Something short and leading about the collection
								below—its contents, the creator, etc.
							</p>
							<p>
								<a
									href="#"
									className="btn btn-primary my-2 me-2"
								>
									Main call to action
								</a>
								<a href="#" className="btn btn-secondary my-2">
									Secondary action
								</a>
							</p>
						</div>
					</div>
				</section>

				<div className="album pb-5">
					<div className="container">
						<div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
							<div className="col">
								<div className="card border-0 shadow-sm">
									<svg
										className="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										aria-label="Placeholder: Thumbnail"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
									>
										<title>Placeholder</title>
										<rect
											width="100%"
											height="100%"
											fill="#55595c"
										></rect>{" "}
									</svg>
									<div className="card-body">
										<p className="card-text text-color-secondary">
											This is a wider card with supporting
											text below as a natural lead-in to
											additional content. This content is
											a little bit longer.
										</p>
										<div className="d-flex justify-content-between align-items-center">
											<div className="btn-group">
												<button
													type="button"
													className="btn btn-sm btn-outline-secondary me-2"
												>
													View
												</button>
												<button
													type="button"
													className="btn btn-sm btn-outline-secondary"
												>
													Edit
												</button>
											</div>
											<small className="text-color-muted">
												9 mins
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card border-0 shadow-sm">
									<svg
										className="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										aria-label="Placeholder: Thumbnail"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
									>
										<title>Placeholder</title>
										<rect
											width="100%"
											height="100%"
											fill="#55595c"
										></rect>{" "}
									</svg>
									<div className="card-body">
										<p className="card-text text-color-secondary">
											This is a wider card with supporting
											text below as a natural lead-in to
											additional content. This content is
											a little bit longer.
										</p>
										<div className="d-flex justify-content-between align-items-center">
											<div className="btn-group">
												<button
													type="button"
													className="btn btn-sm btn-outline-secondary me-2"
												>
													View
												</button>
												<button
													type="button"
													className="btn btn-sm btn-outline-secondary"
												>
													Edit
												</button>
											</div>
											<small className="text-color-muted">
												9 mins
											</small>
										</div>
									</div>
								</div>
							</div>
							<div className="col">
								<div className="card border-0 shadow-sm">
									<svg
										className="bd-placeholder-img card-img-top"
										width="100%"
										height="225"
										xmlns="http://www.w3.org/2000/svg"
										role="img"
										aria-label="Placeholder: Thumbnail"
										preserveAspectRatio="xMidYMid slice"
										focusable="false"
									>
										<title>Placeholder</title>
										<rect
											width="100%"
											height="100%"
											fill="#55595c"
										></rect>{" "}
									</svg>
									<div className="card-body">
										<p className="card-text text-color-secondary">
											This is a wider card with supporting
											text below as a natural lead-in to
											additional content. This content is
											a little bit longer.
										</p>
										<div className="d-flex justify-content-between align-items-center">
											<div className="btn-group">
												<button
													type="button"
													className="btn btn-sm btn-outline-secondary me-2"
												>
													View
												</button>
												<button
													type="button"
													className="btn btn-sm btn-outline-secondary"
												>
													Edit
												</button>
											</div>
											<small className="text-color-muted">
												9 mins
											</small>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
