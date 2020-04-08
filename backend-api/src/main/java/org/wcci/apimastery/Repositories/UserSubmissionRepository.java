package org.wcci.apimastery.Repositories;

import org.springframework.data.repository.CrudRepository;
import org.wcci.apimastery.Model.UserSubmission;

import java.util.Optional;


public interface UserSubmissionRepository extends CrudRepository<UserSubmission, Long>{
Optional<UserSubmission> findById(Long id);


}

