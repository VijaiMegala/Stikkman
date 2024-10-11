import React from 'react'
import PageTwoDescStyles from "./pageTwoDesc.module.scss"

export const PageTwoDesc = () => {
  return (
    <div className={PageTwoDescStyles.pageTwoDescCon} >
        <div className={PageTwoDescStyles.pageTwoDescConMain}>
            <div className={PageTwoDescStyles.pageTwoDescConMainTextCon}>
                <span className={PageTwoDescStyles.pageTwoDescConMainTextConLeft}>
                A Lorem for<br/> The ipsum
                </span>
                <span className={PageTwoDescStyles.pageTwoDescConMainTextConRight}>
                A Lorem for the ipsum, A lorem<br/> for the ipsum, A lorem for the <br/>ipsum.
                </span>
            </div>
        </div>
    </div>
  )
}
