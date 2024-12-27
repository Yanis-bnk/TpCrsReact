

export default function Car({brand, model, body, color, price, year}) {
    return <tr>
        <td>{brand}</td>
        <td>{model}</td>
        <td>{body}</td>
        <td>{color}</td>
        <td>{price}</td>
        <td>{year}</td>
    </tr>
}