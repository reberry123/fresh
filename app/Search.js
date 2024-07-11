'use client'

import React from "react"

export default function Search() {
    return(
        <div className="search-area">
            <form>
                <div className="input-group">
                    <input className="search-input" name="search" placeholder="검색어를 입력해주세요."></input>
                </div>
            </form>
        </div>
    )
}