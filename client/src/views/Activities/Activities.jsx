import React from "react";
import { connect } from "react-redux";
import { deleteActivity } from "../../redux/actions";
import ActivitiesBody from "../../components/activityComponent/ActivityBody";

class Activities extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(id) {
    if (window.confirm("Are you sure you want to delete this activity?")) {
      this.props.deleteActivity(id);
      window.location.reload();
    }
  }

  render() {
    const { activities } = this.props;
    return (
      <div>
        <ActivitiesBody
          activities={activities}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  activities: state.activities,
});

const mapDispatchToProps = {
  deleteActivity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Activities);
