import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Table from "./index"

export default {
  title: "01-Atoms/Table"
}

export const HeadersTop = () =>
  renderToStaticMarkup(
    <Table>
      <thead className="a-table__thead">
        <tr>
          <th className="a-table__th">Jahr</th>
          <th className="a-table__th">Anzahl Bahnhöfe*</th>
          <th className="a-table__th">Anteil Reisender</th>
        </tr>
      </thead>
      <tbody>
        <tr className="a-table__tbody-tr">
          <td className="a-table__td">2017</td>
          <td className="a-table__td">335 BehiG-konform</td>
          <td className="a-table__td">58 Prozent</td>
        </tr>
        <tr className="a-table__tbody-tr">
          <td className="a-table__td">2023</td>
          <td className="a-table__td">556 BehiG-konform</td>
          <td className="a-table__td">93 Prozent</td>
        </tr>
        <tr className="a-table__tbody-tr">
          <td className="a-table__td">Nach 2023</td>
          <td className="a-table__td">679 BehiG-konform</td>
          <td className="a-table__td">99 Prozent</td>
        </tr>
      </tbody>
    </Table>
  )

  export const HeadersTopAlignCenter = () =>
  renderToStaticMarkup(
    <Table classes={["a-table--align-center"]}>
      <thead className="a-table__thead">
        <tr>
          <th className="a-table__th">Jahr</th>
          <th className="a-table__th">Anzahl Bahnhöfe*</th>
          <th className="a-table__th">Anteil Reisender</th>
        </tr>
      </thead>
      <tbody>
        <tr className="a-table__tbody-tr">
          <td className="a-table__td">2017</td>
          <td className="a-table__td">335 BehiG-konform</td>
          <td className="a-table__td">58 Prozent</td>
        </tr>
        <tr className="a-table__tbody-tr">
          <td className="a-table__td">2023</td>
          <td className="a-table__td">556 BehiG-konform</td>
          <td className="a-table__td">93 Prozent</td>
        </tr>
        <tr className="a-table__tbody-tr">
          <td className="a-table__td">Nach 2023</td>
          <td className="a-table__td">679 BehiG-konform</td>
          <td className="a-table__td">99 Prozent</td>
        </tr>
      </tbody>
    </Table>
  )

export const HeadersSide = () =>
  renderToStaticMarkup(
    <Table>
      <tr>
        <th>Date</th>
        <td>12 February</td>
        <td>24 March</td>
        <td>14 April</td>
      </tr>
      <tr>
        <th>Event</th>
        <td>Waltz with Strauss</td>
        <td>The Obelisks</td>
        <td>The What</td>
      </tr>
      <tr>
        <th>Venue</th>
        <td>Main Hall</td>
        <td>West Wing</td>
        <td>Main Hall</td>
      </tr>
    </Table>
  )