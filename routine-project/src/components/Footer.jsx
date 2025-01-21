export default function Footer({ name }) {
    const year = new Date().getFullYear();
    return (
        <footer>
            <p className="p-3">
                &copy; {year} {name}, All Rights Reserved.
            </p>
        </footer>
    );
}
