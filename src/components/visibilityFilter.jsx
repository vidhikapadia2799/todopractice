import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../redux/actions'
import { Filters } from '../redux/actionTypes'
import { Button } from '@material-ui/core'

function VisibilityFilter({ activeFilter, setFilter }) {
    return (
        Filters.map((filter, i) => (
            <Button color="default" variant="contained" style={{margin:10}}
                className={filter === activeFilter ? 'active' : ''}
                onClick={() => setFilter(filter)}
                key={`filter-${i}`}>
                {filter}
            </Button>
        ))
    )
}

const mapState = (state) => ({ activeFilter: state.visibilityFilter.activeFilter })
export default connect(mapState, { setFilter })(VisibilityFilter)