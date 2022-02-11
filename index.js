const axios = require('axios')
const cheerio = require('cheerio')
const express = require('express')

async function getData() {
    try {
        const url = 'https://opensea.io/collection/cool-cats-nft'
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)

        const linkSelector = '#main > div > div > div.CollectionHeaderreact__DivContainer-sc-1woywpk-0.leOEIG > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.hZGRPw.jYqxGr > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.FlexEndreact__FlexEnd-sc-rss0by-0.lmazUR.jYqxGr.eEhtsU > div.fresnel-container.fresnel-greaterThanOrEqual-md > div > div > a'
        const statsSelector = '#main > div > div > div.CollectionHeaderreact__DivContainer-sc-1woywpk-0.leOEIG > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.hZGRPw.jYqxGr > div.Blockreact__Block-sc-1xf18x6-0.karjuF > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.InfoContainerreact__InfoContainer-sc-15x3z7c-0.CollectionStatsBarreact__Container-sc-8gdi9o-0.dBFmez.jYqxGr.fprnFG.cWlCaZ > div'
        
        // const keys = [
        //     'items',
        //     'owners',
        //     'floor',
        //     'volume',
        // ]
    
        $(statsSelector).each((i, el) => {
                $(el).children().each((i, el) => {
                        console.log($(el).text())
                })
        })

    } catch(err) {
        console.log(err);
    }
}

getData()

// https://opensea.io/collection/cosmodinos-alpha
// main link selector: #main > div > div > div.CollectionHeaderreact__DivContainer-sc-1woywpk-0.leOEIG > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.hZGRPw.jYqxGr > div.Blockreact__Block-sc-1xf18x6-0.Flexreact__Flex-sc-1twd32i-0.FlexEndreact__FlexEnd-sc-rss0by-0.lmazUR.jYqxGr.eEhtsU > div.fresnel-container.fresnel-greaterThanOrEqual-md > div > div > a

// todo:
// 1. get url for social links
// 2. make data availabel for users
// 3. 