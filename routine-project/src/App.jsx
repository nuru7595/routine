import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./components/data";

export default function App() {
    return (
        <>
            <Header text="My Routine" />
            <main className="container">
                {data.map((x, i) => (
                    <section key={x.title}>
                        <h2 className="section-title">{x.title}</h2>
                        <table>
                            <tbody>
                                {x.table.map((y, j) => (
                                    <tr key={j}>
                                        <td>
                                            {y.th}
                                            {i === 0 ? " :" : null}
                                        </td>
                                        {i !== 0 ? <td>--</td> : null}
                                        <td>{y.td}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </section>
                ))}
            </main>
            <Footer name="Nuru" />
        </>
    );
}
