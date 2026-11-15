import React from 'react'
import PageInfo from './PageInfo'
import UpdateDetails from './UpdateDetails'
import WidgetList from './WidgetList'

export default function PageForm () {
  return (
    <section className='flex flex-col gap-10'>
        <div className="pageMeta flex gap-10">
            <PageInfo/>
            <UpdateDetails/>
        </div>
        <WidgetList/>
    </section>
  )
}

