import * as React from 'react'
import type { ISchedule } from './../../Utils'
import { AsideContainer } from './Aside.style'
import JobInfo from './JobInfo'

interface IProps {
  collection: ISchedule[]
  size: number
}

const Aside = ({ collection, size }: IProps) => (
  <AsideContainer>
    {collection.map((item) => (
      <JobInfo collection={item} key={item.id} size={size} />
    ))}
  </AsideContainer>
)

export default Aside
