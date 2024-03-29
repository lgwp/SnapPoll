package dev.jinkim.snappollandroid.ui.fragment;

import android.os.Bundle;
import android.support.v4.app.Fragment;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageView;
import android.widget.TextView;

import com.squareup.picasso.Picasso;

import dev.jinkim.snappollandroid.R;
import dev.jinkim.snappollandroid.app.App;
import dev.jinkim.snappollandroid.model.User;
import dev.jinkim.snappollandroid.util.image.CircleTransform;

/**
 * Created by Jin on 11/27/14.
 */
public class ProfileFragment extends Fragment {

    public static final String TAG = "UserProfileFragment ####";

    private ImageView ivProfilePic;
    private TextView tvName;
    private TextView tvEmail;

    @Override
    public View onCreateView(LayoutInflater inflater, ViewGroup container,
                             Bundle savedInstanceState) {
        View rootView = inflater.inflate(R.layout.frag_profile, container, false);

        initializeViews(rootView);

        displayUserInfo();

        return rootView;
    }

    private void initializeViews(View v) {
        ivProfilePic = (ImageView) v.findViewById(R.id.iv_profile_pic);
        tvName = (TextView) v.findViewById(R.id.tv_name);
        tvEmail = (TextView) v.findViewById(R.id.tv_email);
    }

    private void displayUserInfo() {
        User user = App.getInstance().getCurrentUser(getActivity());
        if (user != null) {
            tvName.setText(user.getFullName());
            tvEmail.setText(user.getEmail());
            updateProfilePic(user.getProfilePicUrl());
        }
    }

    private void updateProfilePic(String photoUrl) {
        Picasso.with(getActivity())
                .load(photoUrl)
                .transform(new CircleTransform())
                .into(ivProfilePic);
    }
}
