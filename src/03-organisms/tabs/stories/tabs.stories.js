import React from "react"
import { renderToStaticMarkup } from "react-dom/server"
import Tabs from "../index"

import TabPanel from '../../../01-atoms/tab-panel/index'

const tabs = [
  {
    label: 'Label 1',
    id: 'label-1',
    active: 'true'
  },
  {
    label: 'Label 2',
    id: 'label-2'
  }
];

export default {
  title: "03-Organisms/Tabs"
}

export const Default = () =>
  renderToStaticMarkup(
    <Tabs tabs={tabs}>
      {tabs.map(tab => (
        <TabPanel key={tab.id} id={tab.id} active={tab.active}>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            Libero illo delectus atque praesentium, iusto distinctio saepe. 
            In vitae repellat inventore nulla officia veniam animi veritatis? 
            Laboriosam dicta sint deserunt deleniti.
          </p>
        </TabPanel>
      ))}
    </Tabs>
  )