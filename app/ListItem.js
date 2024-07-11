'use client'

import Link from "next/link"
import React from "react"

export default function ListItem({result}) {
    return(
        <div>
            {result.map((a, i)=>{
                return(
                  <div className="list-item" key={i}>
                    <hr/>
                    <div className="item">
                        <Link href={"/detail/" + a._id.toString()}>{a.title}</Link>
                        <span onClick={(e)=>{
                            fetch('/api/post/delete',
                            {
                                method: 'DELETE',
                                body: a._id
                            })
                            .then((r)=> {
                                console.log(r.status)
                                if (r.status == 200){
                                    e.target.parentElement.style.opacity = 0
                                setTimeout(()=>{
                                    e.target.parentElement.style.display = 'none'
                                }, 500)
                                    // return r.json();
                                } else {
                                    console.log(r)
                                }
                            } )
                            // .then((result)=>{
                            //     e.target.parentElement.style.opacity = 0
                            //     setTimeout(()=>{
                            //         e.target.parentElement.style.display = 'none'
                            //     }, 500)
                            //})
                            .catch((error)=>{
                                console.log(error)
                            });
                            }}>❌
                        </span>
                    </div>
                </div>
                )
              }
            )}
        </div>
    )
}